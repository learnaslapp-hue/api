// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';

import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

const app = express();
app.disable('x-powered-by');

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

/* ============================
   Swagger (CDN assets + route CSP that allows CDN)
   ============================ */
const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.get('/swagger.json', (_req, res) => {
  res.type('application/json').status(200).send(swaggerSpec);
});

const swaggerCsp = helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
    styleSrc: ["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https://unpkg.com", "https://cdn.jsdelivr.net"],
    connectSrc: ["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net"],
    workerSrc: ["'self'", "blob:"],
    frameAncestors: ["'self'"]
  }
});

app.get('/swagger', swaggerCsp, (_req, res) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ASL API Docs</title>
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
  <style>
    html, body { height: 100%; }
    body { margin: 0; background: #fff; }
    #swagger-ui { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js"></script>
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
