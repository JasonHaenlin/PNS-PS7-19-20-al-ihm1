const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const i = require('./itinerary');

const itinerary = express.Router();

itinerary.get('/', handleExceptions(i.getItinerary));

module.exports = itinerary;
