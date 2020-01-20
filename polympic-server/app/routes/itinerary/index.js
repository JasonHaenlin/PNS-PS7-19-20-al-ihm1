const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const i = require('./itinerary');

const itinerary = express.Router();

itinerary.get('/', handleExceptions(i.generateItinerary));
itinerary.post('/preview', handleExceptions(i.previewResult));

module.exports = itinerary;
