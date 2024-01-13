const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const data = require("./fruits.json");

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/fruits", (req, res) => {
  res.jsonp(data.fruits);
});

// Use default router
server.use(router);
server.listen(4201, () => {
  console.log("JSON Server is running");
});
