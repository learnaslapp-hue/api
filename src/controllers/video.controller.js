// src/controllers/video.controller.js
import fetch from "node-fetch";
import { env } from "../config/env.js";

/** Allow typical Drive IDs (base64url) */
function isSafeId(id = "") {
  return /^[A-Za-z0-9_\-]+$/.test(id);
}

function buildDriveAltMediaUrl(id, { key, resourceKey, ackAbuse = true } = {}) {
  const qs = new URLSearchParams();
  qs.set("alt", "media");
  if (ackAbuse) qs.set("acknowledgeAbuse", "true");
  if (resourceKey) qs.set("resourceKey", resourceKey);
  if (key) qs.set("key", key);
  return `https://www.googleapis.com/drive/v3/files/${id}?${qs.toString()}`;
}

function buildDriveUcUrl(id, resourceKey) {
  // “uc” endpoint often works for public files (and supports Range).
  // resourceKey (if present) must be passed as resourcekey (lowercase k).
  const qs = new URLSearchParams();
  qs.set("export", "download");
  qs.set("id", id);
  if (resourceKey) qs.set("resourcekey", resourceKey);
  return `https://drive.google.com/uc?${qs.toString()}`;
}

function mirrorVideoHeaders(upstream, res) {
  const h = upstream.headers;
  const set = (k, v) => v && res.setHeader(k, v);
  set("Content-Type", h.get("content-type") || "video/mp4");
  set("Accept-Ranges", h.get("accept-ranges") || "bytes");
  set("Content-Length", h.get("content-length"));
  set("Content-Range", h.get("content-range"));
  // Cache headers help browsers (and an edge CDN) a bit even for 200/206.
  // Many CDNs won’t cache 206, but harmless to include:
  set("Cache-Control", "public, max-age=300, s-maxage=3600, stale-while-revalidate=60");
  // For XHR/fetch range introspection (not needed for <video> but nice to have)
  set("Access-Control-Expose-Headers", "Content-Range, Accept-Ranges, Content-Length, Content-Type");
}

/**
 * PROXY (kept, but hardened):
 * - Supports resourceKey (if file requires it)
 * - Retries without API key if key is restricted/not needed
 * - Falls back to the “uc” endpoint if alt=media fails
 * - Passes Range through
 * NOTE: This streams bytes through your server (egress costs). Keep client-side caching ON.
 */
export async function getVideo(req, res) {
  try {
    const id = req.params.id;
    if (!id || !isSafeId(id)) return res.status(400).json({ message: "Invalid file id" });

    // Optional resourceKey if your share link had it. Accept either ?rk= or ?resourceKey=
    const resourceKey = (req.query.rk || req.query.resourceKey || "").toString() || undefined;

    const apiKey = env.google?.apiKey;
    const range = req.headers.range || undefined;

    // Abort if upstream is too slow
    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 15000);

    // 1) Try Drive v3 alt=media + API key (+ resourceKey if provided)
    let url = buildDriveAltMediaUrl(id, { key: apiKey, resourceKey, ackAbuse: true });
    let upstream = await fetch(url, {
      headers: range ? { Range: range } : undefined,
      signal: controller.signal,
      redirect: "follow",
    });

    // 2) If 403/404, retry variants:
    if (!upstream.ok && (upstream.status === 403 || upstream.status === 404)) {
      // 2a) Retry without API key (public files sometimes work better that way)
      url = buildDriveAltMediaUrl(id, { resourceKey, ackAbuse: true });
      upstream = await fetch(url, {
        headers: range ? { Range: range } : undefined,
        signal: controller.signal,
        redirect: "follow",
      });

      // 2b) If still not ok, try the “uc” endpoint
      if (!upstream.ok) {
        url = buildDriveUcUrl(id, resourceKey);
        upstream = await fetch(url, {
          headers: range ? { Range: range } : undefined,
          signal: controller.signal,
          redirect: "follow",
        });
      }
    }

    clearTimeout(to);

    // Propagate status (206/200/4xx)
    res.status(upstream.status);
    mirrorVideoHeaders(upstream, res);

    if (upstream.body) {
      upstream.body.pipe(res);
      upstream.body.on("error", () => {
        try { res.destroy(); } catch {}
      });
    } else {
      res.end();
    }
  } catch (err) {
    // AbortError or network errors
    console.error("video proxy error:", err?.message || err);
    // Keep response JSON tiny; <video> doesn’t care about detailed errors
    if (!res.headersSent) res.status(502).json({ message: "Upstream error" });
  }
}
