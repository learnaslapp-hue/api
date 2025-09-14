// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

// ESM __dirname helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App
const app = express();
app.disable('x-powered-by');

// Global middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

/* ============================
   Swagger (LOCAL assets, no CDN)
   ============================ */

// Build OpenAPI spec
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve raw JSON spec
app.get('/swagger.json', (_req, res) => {
  res.type('application/json').status(200).send(swaggerSpec);
});

// Resolve absolute FS path to swagger-ui-dist using CJS interop from ESM
const require = createRequire(import.meta.url);
const swaggerUiDist = require('swagger-ui-dist');
const swaggerUiDistPath = swaggerUiDist.getAbsoluteFSPath();

// Serve Swagger UI static assets at /swagger-assets/*
app.use('/swagger-assets', express.static(swaggerUiDistPath, { maxAge: '1y', index: false }));

// Route-scoped CSP to allow Swagger's inline boot script/styles ONLY on /swagger
const swaggerCsp = helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", 'data:'],
    connectSrc: ["'self'"],       // fetch /swagger.json
    workerSrc: ["'self'", 'blob:'],
    frameAncestors: ["'self'"]
  }
});

// Serve Swagger UI HTML (references our local assets)
app.get('/swagger', swaggerCsp, (_req, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ASL API Docs</title>
  <link rel="icon" type="image/png" href="/swagger-assets/favicon-32x32.png" />
  <link rel="stylesheet" href="/swagger-assets/swagger-ui.css" />
  <style>
    html, body { height: 100%; }
    body { margin: 0; background: #fff; }
    #swagger-ui { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="/swagger-assets/swagger-ui-bundle.js"></script>
  <script src="/swagger-assets/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function () {
      window.ui = SwaggerUIBundle({
        url: '/swagger.json',
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        layout: 'BaseLayout',
        deepLinking: true
      });
    };
  </script>
</body>
</html>`;
  res.type('text/html; charset=utf-8').status(200).send(html);
});

/* ===== Health ===== */
app.get('/health', (_req, res) => {
  res.json({ success: true, status: 'OK' });
});

/* ===== API routes ===== */
app.use('/api', routes);

/* ===== 404 + errors (keep last) ===== */
app.use(notFound);
app.use(errorHandler);

export default app;
