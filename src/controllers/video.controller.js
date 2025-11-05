// src/controllers/video.controller.js
import fetch from 'node-fetch';
import { env } from '../config/env.js';

function mirrorVideoHeaders(upstream, res) {
  const h = upstream.headers;
  const set = (k, v) => v && res.setHeader(k, v);
  set('Content-Type',     h.get('content-type') || 'video/mp4');
  set('Accept-Ranges',    h.get('accept-ranges'));
  set('Content-Length',   h.get('content-length'));
  set('Content-Range',    h.get('content-range'));
  set('Cache-Control',   'public, max-age=3600');
  // Optional: expose for XHR/fetch clients (not needed for <video> tag)
  // set('Access-Control-Expose-Headers', 'Content-Range, Accept-Ranges, Content-Length');
}

export async function getVideo(req, res) {
  try {
    const id = req.params.id;
    if (!id) return res.status(400).json({ message: 'Missing file id' });

    const range = req.headers.range || '';
    const apiKey = env.google.apiKey;
    if (!apiKey) return res.status(500).json({ message: 'Missing GOOGLE_API_KEY' });

    // Google Drive v3 media endpoint for public files
    const url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey}`;
    const upstream = await fetch(url, { headers: { Range: range } });

    // Propagate status (206 when Range is honored; 200 for full body; 404/403 upstream errors)
    res.status(upstream.status);
    mirrorVideoHeaders(upstream, res);

    if (upstream.body) {
      // Stream bytes to client (works on Vercel Functions too)
      upstream.body.pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error(err);
    // Keep response JSON small—clients are typically <video> tags
    res.status(500).json({ message: 'Proxy error' });
  }
}
