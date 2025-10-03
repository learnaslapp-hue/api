
/**
 * @openapi
 * tags:
 *   name: Video
 *   description: API for video
 */
import { Router } from 'express';
import { asyncHandler } from '../middlewares/async.js';
import { getVideo } from '../controllers/video.controller.js';

const router = Router();

/**
 * @openapi
 * /api/video/{id}:
 *   get:
 *     tags: [Video]
 *     summary: Get a video by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Google Drive fileId (`/file/d/{id}/view`)
 *     responses:
 *       200:
 *         description: User details
 */
router.get('/:id', asyncHandler(getVideo));

export default router;
