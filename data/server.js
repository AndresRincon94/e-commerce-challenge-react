const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const data = require("./fruits.json");
const dataUsers = require("./users.json");
const isTesting = true; // Change this to false if you want to use the real API

server.use(middlewares);
server.use(jsonServer.bodyParser);


server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

server.get("/fruits", (req, res) => {
  res.jsonp(data.fruits);
});

server.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).jsonp({ message: "Missing ID" });
  }

  const userLogged = dataUsers.users
    .find((user) => user.username === username && user.password === password);

  if (!userLogged && isTesting) {
    return res.json(dataUsers.users[0]); // Return the guest user if testing
  }

  if (!userLogged) {
    return res.status(401).jsonp({ message: "Invalid credentials" });
  }
  
  return res.json(userLogged);
});

// Use default router
server.use(router);
server.listen(4201, () => {
  console.log("JSON Server is running");
});
