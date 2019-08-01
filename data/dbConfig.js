const knex = require('knex');
const config = require('../knexfile.js');

const db = knex(config.testing);

module.exports = db;
