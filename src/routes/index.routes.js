import { Router } from 'express';
import authRoutes from './auth.routes.js';
import videoRoutes from './video.routes.js';
import apiKeyManagementRoutes from './api-key-management.routes.js';
const router = Router();

router.use('/auth', authRoutes);
router.use('/video', videoRoutes);
router.use('/api-key-management', apiKeyManagementRoutes);

export default router;
