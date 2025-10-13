import NodeCache from "node-cache";
import {
  getAllAPIKey,
  getAPIKey,
  getById,
  addAPIKey,
  markAsExpired,
} from "../services/api-key-management.service.js";

// 🧠 Cache setup (TTL = 60s)
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

function getCacheKey(base, userId) {
  return `${base}:${userId || "anonymous"}`;
}

// 🟩 Get single API key
export async function get(req, res) {
  const userId = req.headers["userid"]; // from request header
  const cacheKey = getCacheKey("apiKey:single", userId);

  try {
    let apiKeyDetails = cache.get(cacheKey);

    if (!apiKeyDetails) {
      apiKeyDetails = await getAPIKey();
      cache.set(cacheKey, apiKeyDetails);
    }

    return res.json({
      success: true,
      cached: !!cache.get(cacheKey),
      userId,
      data: apiKeyDetails,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

// 🟦 Get all API keys
export async function getAll(req, res) {
  const userId = req.headers["userid"];
  const cacheKey = getCacheKey("apiKey:all", userId);

  try {
    let all = cache.get(cacheKey);

    if (!all) {
      all = await getAllAPIKey();
      cache.set(cacheKey, all);
    }

    return res.json({
      success: true,
      cached: !!cache.get(cacheKey),
      userId,
      data: all,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
}

// 🟨 Create API key
export async function create(req, res) {
  const userId = req.headers["userid"];
  const { email, name, apiKey } = req.body;

  try {
    const apiKeyDetails = await addAPIKey(email, name, apiKey);

    // ❌ Invalidate user cache
    cache.del([getCacheKey("apiKey:all", userId), getCacheKey("apiKey:single", userId)]);

    return res.json({ success: true, userId, data: apiKeyDetails });
  } catch (error) {
    if (
      error?.message?.toLowerCase()?.includes("duplicate") &&
      error.message?.toLowerCase()?.includes("violates")
    ) {
      return res
        .status(400)
        .json({ success: false, message: "API Key already exists" });
    }
    return res.status(400).json({ success: false, message: error.message });
  }
}

// 🟥 Mark API key as expired
export async function expired(req, res) {
  const userId = req.headers["userid"];
  const id = req.params.id;

  try {
    let apiKeyDetails = await getById(id);
    if (!apiKeyDetails) {
      return res
        .status(404)
        .json({ success: false, message: "API Key not found" });
    }

    apiKeyDetails = await markAsExpired(id);

    // ❌ Invalidate user cache
    cache.del([getCacheKey("apiKey:all", userId), getCacheKey("apiKey:single", userId)]);

    return res.json({ success: true, userId, data: apiKeyDetails });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
}
