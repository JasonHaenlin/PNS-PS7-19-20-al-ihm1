const express = require('express');
const events = require('./events');
const preferences = require('./preferences');
const itineraries = require('./itinerary');

const main = express.Router();

/* GET home page. */
main.get('/', (req, res) =>
  res.render('index', { title: 'Zz(>^^)> Server On <(^^<)zZ' }));

main.get('/editor', (req, res) =>
  res.render('editor/index', { file: 'example.js' }));

module.exports = {
  main,
  events,
  preferences,
  itineraries
};
