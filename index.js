// api/index.js
import app from '../src/app.js';

// Express apps are compatible with Vercel functions.
// Export the app as the default handler.
export default app;

// If you prefer being explicit:
// export default (req, res) => app(req, res);
