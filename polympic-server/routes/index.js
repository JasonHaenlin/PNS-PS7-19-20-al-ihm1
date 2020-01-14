const express = require('express');
const events = require('./events');
const preferences = require('./preferences');
const itineraries = require('./itinerary');
const fs = require('fs');
const resHandler = require('../utils/response-handler');

const main = express.Router();

/* GET home page. */
main.get('/', (req, res) =>
  res.render('index', { title: 'Zz(>^^)> Server On <(^^<)zZ' }));

main.get('/editor', (req, res) =>
  res.render('editor/index'));

main.post('/editor/save', (req, res) => {
  let code = req.body.code;
  let file = "./public/scripts/" + req.body.file;
  fs.writeFileSync(file, code);
  resHandler.yahResponse(res, 'ok');
});

module.exports = {
  main,
  events,
  preferences,
  itineraries
};
