// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

const app = express();

// Global middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// --- Swagger (local assets + route-specific CSP) ---
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Allow Swagger UI's inline <script> and <style> only on /swagger
// Also keep everything else restricted to 'self'
const swaggerCsp = helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    // Swagger UI HTML includes an inline script block; allow it here.
    scriptSrc: ["'self'", "'unsafe-inline'"],
    // Swagger UI injects inline styles; allow them here.
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:"],
    // Needed for XHR to /swagger.json on same origin
    connectSrc: ["'self'"]
  }
});

// Mount CSP override first, then swagger static + page.
// swaggerUi.serve serves local assets from swagger-ui-express package.
// No external CDNs required, so no CSP exceptions for remote hosts.
app.use('/swagger', swaggerCsp, swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

// (Optional) expose the JSON spec if you want to fetch it directly
app.get('/swagger.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(swaggerSpec);
});

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
