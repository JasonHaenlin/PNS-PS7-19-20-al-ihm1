const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const e = require('./event');

const events = express.Router();

/**
 * @api {get} /events Request a list of events
 * @apiName GetEvents
 * @apiGroup Events
 * @apiParam {string} prefs query params to get the events filtered by preferences.
 * Should be a list of preferences separeted by comma ','
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:3000/events?prefs=Football,Rugby
 * @apiSucess (200) {json[]} events list
 * @apiExample Response:
 * HTTP/1.1 200 OK
 * [
 *      {
 *          "id": "fdm2",
 *          "name": "Football Demi Finale 1/2 ",
 *          "description": "La demi finale présentant le match tant attendu Italie vs Espagne, lequel des deux ira en final ? !",
 *          "versus": [
 *              "Italie",
 *              "Espagne"
 *          ],
 *          "sport": "Football",
 *          "site": {
 *              "name": "Stade de France A",
 *              "latitude": 48.924459,
 *              "longitude": 2.360164
 *          },
 *          "startTime": 1578641596,
 *      }
 * ]
 */
events.get('/', handleExceptions(e.getEventsByPreferences));
events.post('/preview', handleExceptions(e.previewResult));

module.exports = events;
