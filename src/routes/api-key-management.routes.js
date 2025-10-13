/**
 * @openapi
 * tags:
 *   name: API Key Management
 *   description: API for managing API keys
 *
 * components:
 *   parameters:
 *     UserIdHeader:
 *       in: header
 *       name: userId
 *       required: false
 *       schema:
 *         type: string
 *       description: Authenticated user's ID used for per-user caching. In Node, header names are lowercased, so access it as req.headers['userid'].
 *       example: "9f2b3e8a-12cd-4a77-9a30-3d1b6e6a0c3b"
 */
import { Router } from 'express';
import { asyncHandler } from '../middlewares/async.js';
import {
  get,
  getAll,
  create,
  expired,
} from '../controllers/api-key-management.controller.js';

const router = Router();

/**
 * @openapi
 * /api/api-key-management/all:
 *   get:
 *     tags: [API Key Management]
 *     summary: Get list of all active API keys
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *     responses:
 *       200:
 *         description: List of API keys
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 cached:
 *                   type: boolean
 *                   description: Indicates if the response came from cache.
 *                 userId:
 *                   type: string
 *                   nullable: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/all", asyncHandler(getAll));

/**
 * @openapi
 * /api/api-key-management/one:
 *   get:
 *     tags: [API Key Management]
 *     summary: Get single API key
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *     responses:
 *       200:
 *         description: API Key
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 cached:
 *                   type: boolean
 *                 userId:
 *                   type: string
 *                   nullable: true
 *                 data:
 *                   type: object
 */
router.get('/one', asyncHandler(get));

/**
 * @openapi
 * /api/api-key-management/:
 *   post:
 *     tags: [API Key Management]
 *     summary: Create a new API key
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - name
 *               - apiKey
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               name:
 *                 type: string
 *               apiKey:
 *                 type: string
 *     responses:
 *       200:
 *         description: API Key created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 userId:
 *                   type: string
 *                   nullable: true
 *                 data:
 *                   type: object
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid input or duplicate key
 */
router.post('/', asyncHandler(create));

/**
 * @openapi
 * /api/api-key-management/{id}/mark-expired:
 *   put:
 *     tags: [API Key Management]
 *     summary: Mark an API key as expired
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: API Key ID
 *     responses:
 *       200:
 *         description: Updated API key marked as expired
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 userId:
 *                   type: string
 *                   nullable: true
 *                 data:
 *                   type: object
 *       404:
 *         description: API Key not found
 *       400:
 *         description: Error processing request
 */
router.put("/:id/mark-expired", asyncHandler(expired));

export default router;
