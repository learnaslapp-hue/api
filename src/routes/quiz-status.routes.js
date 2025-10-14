/**
 * @openapi
 * tags:
 *   name: Quiz Status
 *   description: APIs for managing user quiz status
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
 */
import { Router } from 'express';
import { asyncHandler } from '../middlewares/async.js';
import { getUserQuizStatus, save } from '../controllers/quiz-status.controller.js';

const router = Router();


/**
 * @openapi
 * /api/quiz-status:
 *   get:
 *     tags: [Quiz Status]
 *     summary: Get the quiz status for the current user
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *     responses:
 *       200:
 *         description: Quiz status retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     useId:
 *                       type: string
 *                     currentLevel:
 *                       type: string
 *                     currentHighScore:
 *                       type: string
 *                     completedQuiz:
 *                       type: array
 *                     currentQuizId:
 *                       type: string
 */
router.get('/', asyncHandler(getUserQuizStatus));

/**
 * @openapi
 * /api/quiz-status/:
 *   post:
 *     tags: [Quiz Status]
 *     summary: Save or update the quiz status for the current user
 *     parameters:
 *       - $ref: '#/components/parameters/UserIdHeader'
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentLevel
 *               - currentHighScore
 *               - completedQuiz
 *               - currentQuizId
 *             properties:
 *               currentLevel:
 *                 type: string
 *                 example: 0
 *               currentHighScore:
 *                 type: string
 *                 example: 0
 *               completedQuiz:
 *                 type: array
 *                 example: []
 *               currentQuizId:
 *                 type: string
 *                 example: 0
 *     responses:
 *       200:
 *         description: Quiz status saved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     useId:
 *                       type: string
 *                     currentLevel:
 *                       type: string
 *                     currentHighScore:
 *                       type: string
 *                     completedQuiz:
 *                       type: array
 *                     currentQuizId:
 *                       type: string
 *       400:
 *         description: Invalid input or duplicate key
 */
router.post('/', asyncHandler(save));


export default router;
