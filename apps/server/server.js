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

// Apply authentication to all routes except health check
server.use('/products*', authenticate);
server.use('/cart*', authenticate);
server.use('/suggestions*', authenticate);

server.get('/suggestions', authenticate, (req, res) => {
  const suggestions = db.products
    .filter(product => product.name.toLowerCase().includes(req.query.searchQuery.toLowerCase()))
    .map(product => product.name);
  res.json(suggestions);
})

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running on port:', port);
  console.log('Authentication enabled with API key:', API_KEY.substring(0, 10) + '...');
});
