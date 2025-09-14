// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// --- Swagger (MOUNT AT /swagger) ---
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 1) Serve static assets from swagger-ui-dist at /swagger/*
app.use(
  '/swagger',
  swaggerUi.serveFiles(swaggerSpec, { explorer: true })
);

// 2) Serve the HTML that bootstraps Swagger UI at /swagger
app.get(
  '/swagger',
  swaggerUi.setup(swaggerSpec, { explorer: true })
);

// Health
app.get('/health', (_req, res) => {
  res.json({ success: true, status: 'OK' });
});

// API routes
app.use('/api', routes);

// 404 + errors (keep last)
app.use(notFound);
app.use(errorHandler);

export default app;
