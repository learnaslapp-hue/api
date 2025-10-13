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
 *       description: >
 *         Per-user cache scope. In Node, headers are lowercased and accessible as
 *         `req.headers['userid']`.
 *       example: "1"
 *   schemas:
 *     ApiResponseMany:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         cached:
 *           type: boolean
 *         data:
 *           type: array
 *           items:
 *             type: object
 *     ApiResponseOne:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *         cached:
 *           type: boolean
 *         refreshed:
 *           type: boolean
 *         userId:
 *           type: string
 *           nullable: true
 *         data:
 *           type: object
 */
import { Router } from 'express';
import { asyncHandler } from '../middlewares/async.js';
import { get, getAll, create, expired } from '../controllers/api-key-management.controller.js';

const router = Router();

/**
 * @openapi
 * /api/api-key-management/all:
 *   get:
 *     tags: [API Key Management]
 *     summary: Get list of all active API keys
 *     responses:
 *       200:
 *         description: List of API keys
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponseMany'
 */
router.get('/all', asyncHandler(getAll));

/**
 * @openapi
 * /api/api-key-management/one:
 *   get:
 *     tags: [API Key Management]
 *     summary: Get single API key (per-user cache)
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *       - in: query
 *         name: refresh
 *         required: false
 *         schema:
 *           type: boolean
 *           default: false
 *         description: If true, bypass and refresh this user's cache.
 *     responses:
 *       200:
 *         description: API Key
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponseOne'
 */
router.get('/one', asyncHandler(get));

/**
 * @openapi
 * /api/api-key-management/:
 *   post:
 *     tags: [API Key Management]
 *     summary: Create a new API key
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
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: API Key ID
 *     responses:
 *       200:
 *         description: Updated API key marked as expired (cache invalidated for all users)
 *       404:
 *         description: API Key not found
 *       400:
 *         description: Error processing request
 */
router.put('/:id/mark-expired', asyncHandler(expired));

export default router;
