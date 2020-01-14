const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const i = require('./itinerary');

const anItinierary = express.Router();

anItinierary.get('/', handleExceptions(i.getEventsByPreferencesandDistance));

module.exports = anItinierary;
