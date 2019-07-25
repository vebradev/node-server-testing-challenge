const express = require('express');

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.json("On");
});

const port = process.env.PORT || 4123;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

module.exports = server;