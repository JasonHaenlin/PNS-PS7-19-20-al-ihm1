

const express = require('express');
const events = require('./events');
const preferences = require('./preferences');

const main = express.Router();

/* GET home page. */
main.get('/', (req, res) =>
  res.render('index', { title: 'Zz(>^^)> Server On <(^^<)zZ' }));

module.exports = {
  main,
  events,
  preferences
};
