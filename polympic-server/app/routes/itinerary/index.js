const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const i = require('./itinerary');

const itinerary = express.Router();

itinerary.get('/', handleExceptions(i.getItinerary));
itinerary.post('/preview', handleExceptions(i.previewResult));
itinerary.put('/accessibilities', handleExceptions(i.updateConfig));
itinerary.get('/accessibilities', handleExceptions(i.getConfig));

module.exports = itinerary;
