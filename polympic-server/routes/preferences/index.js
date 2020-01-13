const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const p = require('./preference');

const preferences = express.Router();

/**
 * @api {get} /preferences Request a list of preferences
 * @apiName GetPreferences
 * @apiGroup Preferences
 * @apiParam {string} select query params to get the preferences filtered.
 * Should be a list of preferences separeted by comma ','
 * @apiExample {curl} Example usage:
 * curl -i http://localhost:3000/preferences?select=sport
 * @apiSucess (200) {json[]} events list
 * @apiExample Response:
 * HTTP/1.1 200 OK
 * [
 *      {
 *          "name": "Football",
 *          "tag": "sport",
 *          "img": ""
 *      }
 * ]
 */
preferences.get('/', handleExceptions(p.getPreferencesByTypes));

module.exports = preferences;
