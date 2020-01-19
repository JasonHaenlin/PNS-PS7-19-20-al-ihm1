/* eslint-disable security/detect-non-literal-fs-filename */
const express = require('express');
const events = require('./events');
const preferences = require('./preferences');
const itineraries = require('./itinerary');
const touristicSites = require('./touristicsites');
const editor = require('./editor');

const main = express.Router();

/* GET home page. */
main.get('/', (req, res) =>
  res.render('index', { title: 'Zz(>^^)> Server On <(^^<)zZ' }));

main.get('/doc', (req, res) =>
  res.render('apidoc'));


module.exports = {
  main,
  events,
  preferences,
  itineraries,
  touristicSites,
  editor
};
