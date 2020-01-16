

const express = require('express');
const users = require('./users');
const main = express.Router();

/* GET home page. */
main.get('/', (req, res) =>
  res.render('index', { title: 'Express' }));

module.exports = {
  main,
  users
};
