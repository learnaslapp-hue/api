import { Router } from 'express';
import authRoutes from './auth.routes.js';
import videoRoutes from './video.routes.js';
import apiKeyManagementRoutes from './api-key-management.routes.js';
import quizStatusRoutes from './quiz-status.routes.js';
const router = Router();

router.use('/auth', authRoutes);
router.use('/video', videoRoutes);
router.use('/api-key-management', apiKeyManagementRoutes);
router.use('/quiz-status', quizStatusRoutes);

export default router;
