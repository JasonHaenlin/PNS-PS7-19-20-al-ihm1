const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const t = require('./touristicsites');

const touristicSites = express.Router();

/**
 * @api {get} /touristicsites Request a list of touristic sites
 * @apiName TouristicSitesWithinDuration
 * @apiGroup touristicSites
 * @apiParam {string} select query params int duration (seconds).
 * filtered by max duration
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:3000/touristicsites?select=10000
 * @apiSuccess (200) {json[]} touristic sites list
 * @apiExample Response:
 * HTTP/1.1 200 OK
 * [
    {
        "name" : "Mini-expo : l'histoire du ballon",
        "position" : {
            "latitude" :48.920482,
            "longitude" :2.366151
        },
        "duration" : 900,
        "type" : "Exposition"
    }
 * ]
 */
touristicSites.get('/', handleExceptions(t.TouristicSitesWithinDuration));

module.exports = touristicSites;
