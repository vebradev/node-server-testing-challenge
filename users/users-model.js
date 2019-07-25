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

function getSingleUser() {

}

function addUser() {

}

function removeUser() {

}