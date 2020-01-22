const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const i = require('./itinerary');

const itinerary = express.Router();

/**
 * @api {get} /itinerary
 * @apiName GetItinenary
 * @apiGroup Itinenary
 * @apiParam {string[]} sport query params.
 * Should be a list of preferences separeted by comma ','
 * @apiParam {string[]} country query params.
 * Should be a list of preferences separeted by comma ','
 * @apiParam {string[]} recreation query params.
 * Should be a list of preferences separeted by comma ','
 * @apiParam {string[]} tourism query params.
 * Should be a list of preferences separeted by comma ','
 * @apiParam {string[]} handicap query params.
 * each elemnts should be a key:value format
 * Should be a list of preferences separeted by comma ','
 * @apiParam {bool} preview query params.
 * Should be a list of preferences separeted by comma ','
 * @apiExample {curl} Example usage:
 * curl -i localhost:3000/itinerary?sport=Football,Natation,Relais,
 * @apiSuccess (200) {json} the itinerary with all the steps.
 * @apiExample Response:
 * HTTP/1.1 200 OK
 * {
 * "events":[
 *              [
 *                {
 *                    "id": "fdm1",
 *                    "img": "https://otakedev.com/share/preferences/sports/
 *                              football.jpg",
 *                    "name": "Football Demi Finale 1/2 ",
 *                    "description": "La demi finale présentant le match
 *                                  tant * attendu Italie vs Espagne,
 *                                  lequel des deux ira en final * ? !",
 *                    "versus": [
 *                        "Italie",
 *                        "Espagne"
 *                    ],
 *                    "sport": "Football",
 *                    "site": {
 *                        "name": "Stade de France A",
 *                        "latitude": 48.924298,
 *                        "longitude": 2.359805
 *                    },
 *                    "status": "none",
 *                    "startTime": 1641369600,
 *                    "endTime": 1641373200,
 *                    "distance": 259
 *                  }
 *              ]
 *          ]
 * }
 */
itinerary.get('/', handleExceptions(i.getItinerary));

/**
 * @api {put} /itinerary/accessibilities
 * @apiName PutItineraryAccessibilities
 * @apiGroup Itinenary
 * @apiDescription update the configutations values in the server
 * The 4 values are the accessibilites and the meal
 * 1 to 3 reprensent the distance between steps according to mobility
 * respectively "no difficulties", "some difficulties", and "high difficulties".
 * The last one is the lunch time in hour.
 * @apiExample {curl} Example usage:
 *     curl -d '
 *          {"value":[200,504,1281,8]}
 *              '
 *    -H "Content-Type: application/json" -X PUT http://
 *      localhost:3000/itinerary/accessibilities
 * @apiSuccess (200) {json} the new configurations values
 * @apiExample Response:
 * HTTP/1.1 200 OK
 *  {
 *      "value": [
 *          5,
 *          10,
 *          20,
 *          22
 *      ]
 *  }
 */
itinerary.put('/accessibilities', handleExceptions(i.updateConfig));

/**
 * @api {get} /itinerary/accessibilities
 * @apiName GetItineraryAccessibilities
 * @apiGroup Itinenary
 * @apiDescription get the configutations values in the server
 * The 4 values are the accessibilites and the meal
 * 1 to 3 reprensent the distance between steps according to mobility
 * respectively "no difficulties", "some difficulties", and "high difficulties".
 * The last one is the lunch time in hour.
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:3000/itinerary/accessibilities
 * @apiSuccess (200) {json} the configurations values
 * @apiExample Response:
 * HTTP/1.1 200 OK
 *  {
 *      "value": [
 *          5,
 *          10,
 *          20,
 *          22
 *      ]
 *  }
 */
itinerary.get('/accessibilities', handleExceptions(i.getConfig));

module.exports = itinerary;
