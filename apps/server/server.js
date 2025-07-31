const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const port = process.env.PORT || 3002;

// Simple API key for authentication
const API_KEY = process.env.API_KEY || 'fruit-shop-api-key-2024';

// Authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.headers['authorization']?.replace('Bearer ', '');
  
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Valid API key required. Provide X-API-Key header or Authorization: Bearer <key>'
    });
  }
  
  next();
};

// Public health check endpoint (no auth required)
server.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

server.use(middlewares);

// Custom suggestions endpoint with auth
server.get('/suggestions', authenticate, (req, res) => {
  const searchQuery = req.query.searchQuery || '';
  const suggestions = db.products
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map(product => product.name);
  res.json(suggestions);
});

// Apply authentication to JSON Server routes
server.use((req, res, next) => {
  // Skip authentication for health check
  if (req.path === '/health') {
    return next();
  }
  
  // Apply authentication to all other routes
  authenticate(req, res, next);
});

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running on port:', port);
  console.log('Authentication enabled with API key:', API_KEY.substring(0, 10) + '...');
});
