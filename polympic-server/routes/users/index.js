const express = require('express');
const { handleExceptions } = require('../../middlewares/error-handlers');

const resource = require('./users');

const users = express.Router();

/**
 * @api {get} /users Request something
 * @apiName GetSource
 * @apiGroup USers
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/users/
 * @apiSuccess (200) {json} Response
 * @apiError (404) {json} NotFoundError Element has not been found
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *        "code": 404,
 *        "message": "please check URL"
 *    }
 */
users.get('/', handleExceptions(resource.getSource));

module.exports = users;
