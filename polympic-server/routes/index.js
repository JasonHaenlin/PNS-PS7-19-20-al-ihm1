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

main.get('/editor', (req, res) => {
  let id = req.query.id;
  if (id === '438c83fa-f6bc-4fe7-a20a-ee08d87df21d') {
    res.render('editor/index');
  }
  res.render('index', { title: 'Σ(ﾟДﾟ)' });
});

main.post('/editor/save', (req, res) => {
  let code = req.body.code;
  let file = './public/scripts/' + req.body.file;
  fs.writeFileSync(file, code);
  resHandler.yahResponse(res, 'ok');
});

module.exports = {
  main,
  events,
  preferences,
  itineraries
};
