//src/server.js
import fs from 'fs';
import http from 'http';
import https from 'https';
import app from './app.js';
import { env } from './config/env.js';

// HTTP
const httpServer = http.createServer(app);
httpServer.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`[HTTP] Listening on http://localhost:${env.port}`);
});

// HTTPS (optional in dev)
if (env.sslKey && env.sslCert && fs.existsSync(env.sslKey) && fs.existsSync(env.sslCert)) {
  const options = {
    key: fs.readFileSync(env.sslKey),
    cert: fs.readFileSync(env.sslCert),
  };
  const httpsServer = https.createServer(options, app);
  httpsServer.listen(env.httpsPort, () => {
    // eslint-disable-next-line no-console
    console.log(`[HTTPS] Listening on https://localhost:${env.httpsPort}`);
  });
} else {
  // eslint-disable-next-line no-console
  console.log('[HTTPS] SSL key/cert not found or not configured—skipping HTTPS server');
}
