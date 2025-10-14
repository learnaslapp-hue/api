import NodeCache from "node-cache";
import { getByUserId, saveQuizStatus } from "../services/quiz-status.service.js";

// Cache (TTL = 60s)
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120 });

// Cache key helpers
const KEY_BASE = "quizStatus";
const getCacheKey = (userId) => `${KEY_BASE}:${userId || "anonymous"}`;


// GET /api/quiz-status
export async function getUserQuizStatus(req, res) {
  const userId = req.headers["userid"]; // optional; per-user scope
  const cacheKey = getCacheKey(userId);

  try {
    let data = cache.get(cacheKey);

    if (!data) {
      data = await getByUserId(userId);
      if (data) cache.set(cacheKey, data);
    }

    return res.json({ success: true, cached: !refresh && !!cache.get(cacheKey), data });
  } catch (err) {
    console.error("getUserQuizStatus error:", err);
    return res.status(500).json({ success: false, message: err.message || "Server error" });
  }
}

// POST /api/quiz-status
export async function save(req, res) {
  const userId = req.headers["userid"];
  const { currentLevel, currentHighScore, completedQuiz, currentQuizId } = req.body;

  try {
    const saved = await saveQuizStatus(
      userId,
      currentLevel,
      currentHighScore,
      completedQuiz,
      currentQuizId
    );

    // Invalidate that user's cache
    cache.del(getCacheKey(userId));

    // Store new value to cache immediately (optional but faster)
    cache.set(getCacheKey(userId), saved);

    return res.json({ success: true, data: saved });
  } catch (error) {
    console.error("saveQuizStatus error:", error);
    const msg = String(error?.message || "");
    if (msg.toLowerCase().includes("duplicate") && msg.toLowerCase().includes("violates")) {
      return res.status(400).json({ success: false, message: "Quiz status already exists" });
    }
    return res.status(400).json({ success: false, message: error.message });
  }
}
