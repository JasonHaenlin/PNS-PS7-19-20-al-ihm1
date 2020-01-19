const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const r = require('./restaurant');

const restaurant = express.Router();

/**
 * @api {get} /restaurant Request a list of restaurant
 * @apiName restaurantsWithDistance
 * @apiGroup restaurant
 * @apiParam {string} select latitude longitude to get distance with restaurant
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:3000/restaurant?select={latitude: 48.922456, longitude: 2.361977}'
 * @apiSucess (200) {json[]} events list
 * @apiExample Response:
 * HTTP/1.1 200 OK
 * [
    {
        "name" : "Sushi Shop",
        "position" : {
            "latitude" :48.919541,
            "longitude" :2.362471
        }
        "distance" : 11111
    }
 * ]
 */
restaurant.get('/', handleExceptions(r.restaurantsWithDistance));

module.exports = restaurant;
