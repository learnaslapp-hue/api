// src/controllers/video.controller.js
import { env } from '../config/env.js';

export async function getVideo(req, res) {
  const id = req.params.id;
  if (!id) return res.status(400).json({ message: 'Missing file id' });

  // Build a direct media URL for a PUBLIC Drive file
  // (If private, see the OAuth-signed variant below)
  const apiKey = env.google.apiKey;
  if (!apiKey) return res.status(500).json({ message: 'Missing GOOGLE_API_KEY' });

  const direct = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${apiKey}`;

  // Optional: short cache on the redirect itself so your function isn’t hit on every range chunk
  res.setHeader('Cache-Control', 'public, max-age=300'); // cache the 302 for 5 min

  // Important: send a redirect so the browser replays the (Range) request to Google directly.
  res.status(302).setHeader('Location', direct).end();
}
