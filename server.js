const express = require("express");

const db = require("./users/users-model");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    message: "✅"
  });
});

server.get("/api/users", (req, res) => {
  db.getAllUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/api/users", (req, res) => {
  const user = req.body;

  db.addUser(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.json(error);
    });
});

const port = process.env.PORT || 4123;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

module.exports = server;
