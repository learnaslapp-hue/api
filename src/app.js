// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';

import { swaggerOptions } from './config/swagger.js';
import routes from './routes/index.routes.js';
import { notFound, errorHandler } from './middlewares/error-handler.js';

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);

// ===== Global middleware (HTTP/IP dev friendly) =====
app.use(
  helmet({
    hsts: false,
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// ===== Static (optional) =====
app.use(express.static(path.join(process.cwd(), 'public')));

// Tiny favicon to quiet the 404/upgrade noise
app.get('/favicon.ico', (_req, res) => res.status(204).end());

// ===== Build Swagger spec once =====
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Keep /swagger.json available (optional; UI won’t fetch it)
app.get('/swagger.json', (_req, res) => {
  res.type('application/json').status(200).send(swaggerSpec);
});

// Per-route CSP so Swagger UI can load from CDN
const swaggerCsp = helmet.contentSecurityPolicy({
  useDefaults: true,
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
    styleSrc:  ["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
    imgSrc:    ["'self'", "data:", "https://unpkg.com", "https://cdn.jsdelivr.net"],
    connectSrc:["'self'", "https://unpkg.com", "https://cdn.jsdelivr.net"],
    workerSrc: ["'self'", "blob:"],
    frameAncestors: ["'self'"],
  },
});

// ===== Serve Swagger UI (inline spec + HTTP pin + request interceptor) =====
app.get('/swagger', swaggerCsp, (_req, res) => {
  const specJson = JSON.stringify(swaggerSpec);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>ASL API Docs</title>
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests: 0">
  <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
  <style>
    html, body { height: 100%; }
    body { margin: 0; background: #fff; }
    #swagger-ui { min-height: 100vh; }
  </style>
</head>
<body>
  <div id="swagger-ui"></div>

  <!-- Inline the spec to avoid network fetches that might be auto-upgraded -->
  <script>
    (function() {
      // Make a shallow copy so we can safely mutate servers
      var spec = ${specJson};
      var httpOrigin = 'http://' + window.location.host;

      // Force the first server to be absolute HTTP (works for IP or localhost)
      spec.servers = [{ url: httpOrigin, description: 'Pinned HTTP Origin' }, { url: '/', description: 'Current Origin' }];

      // Expose for the UI init below
      window.__SWAGGER_SPEC__ = spec;
    })();
  </script>

  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
  <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-standalone-preset.js"></script>
  <script>
    window.onload = function () {
      window.ui = SwaggerUIBundle({
        // Use the inlined spec
        spec: window.__SWAGGER_SPEC__,
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis, SwaggerUIStandalonePreset],
        layout: 'BaseLayout',
        deepLinking: true,

        // Last-resort safety: if the browser/extension rewrites to https,
        // rewrite requests back to http://<host> before sending.
        requestInterceptor: function(req) {
          try {
            var host = window.location.host;
            var httpsPrefix = 'https://' + host;
            var httpPrefix  = 'http://'  + host;
            if (req.url.indexOf(httpsPrefix) === 0) {
              req.url = httpPrefix + req.url.slice(httpsPrefix.length);
            }
          } catch(e) {}
          return req;
        }
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

/* ===== 404 + error handlers ===== */
app.use(notFound);
app.use(errorHandler);

export default app;
