const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('apps/server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const port = 3002;

server.use(middlewares);

server.get('/suggestions', (req, res) => {
  const suggestions = db.products
    .filter(product => product.name.toLowerCase().includes(req.query.searchQuery.toLowerCase()))
    .map(product => product.name);
  res.json(suggestions);
})

server.use(router);
server.listen(port, () => {
  console.log('JSON Server is running on port:', port)
});
