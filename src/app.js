// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerJsdoc from 'swagger-jsdoc';
import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

// For ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Global middleware
app.disable('x-powered-by');
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// ===== Swagger (LOCAL assets, no CDN, route-scoped CSP) =====

// 1) Build the OpenAPI spec
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 2) Serve the raw JSON spec
app.get('/swagger.json', (_req, res) => {
  res.type('application/json').status(200).send(swaggerSpec);
});

// 3) Serve Swagger UI assets from node_modules/swagger-ui-dist
//    Vercel bundles production dependencies into the function, so these files are available.
const swaggerUiDistPath = (() => {
  // dynamic import-compatible way to resolve the absolute FS path to swagger-ui-dist
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const dist = require('swagger-ui-dist'); // allowed in Node ESM for CJS modules
  return dist.getAbsoluteFSPath();
})();
app.use('/swagger-assets', express.static(swaggerUiDistPath, { maxAge: '1y' }));

// 4) Apply a route-scoped CSP that permits inline script/style ONLY on /swagger
const swaggerCsp = helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"], // Swagger UI boot script is inline
    styleSrc: ["'self'", "'unsafe-inline'"],  // Swagger UI injects inline styles
    imgSrc: ["'self'", "data:"],
    connectSrc: ["'self'"],                   // XHR for /swagger.json
    workerSrc: ["'self'", "blob:"],
    frameAncestors: ["'self'"]
  }
});

// 5) Serve the HTML shell that points to our local assets (no CDN)
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

// ===== Health
app.get('/health', (_req, res) => {
  res.json({ success: true, status: 'OK' });
});

// ===== API routes
app.use('/api', routes);

// ===== 404 + errors (keep last)
app.use(notFound);
app.use(errorHandler);

export default app;
