import { Router } from 'express';
import authRoutes from './auth.routes.js';
import videoRoutes from './video.routes.js';
const router = Router();

router.use('/auth', authRoutes);
router.use('/video', videoRoutes);

export default router;
