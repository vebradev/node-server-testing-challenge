const db = require("../data/dbConfig");

module.exports = {
  getAllUsers,
  getSingleUser,
  addUser,
  removeUser
}

function getAllUsers() {
  return db("users").select("*");
}

function getSingleUser(id) {
  return db("users").select("username").where({ id });
}

async function addUser(user) {
  const [id] = await db("users").insert(user);
  return getSingleUser(id);
}

function removeUser() {

}