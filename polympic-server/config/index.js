require('dotenv').config();
// if something else isn't setting ENV, use development
const environment = process.env.NODE_ENV || 'development';
// require environment's settings from knexfile
// eslint-disable-next-line security/detect-object-injection
const configuration = require('../knexfile')[environment];
// connect to DB via knex using env's settings
const database = require('knex')(configuration);
// winston logger
const logger = require('./logger');

module.exports = {
  server: {
    development: {
      host: '127.0.0.1',
      port: 3000
    },
    production: {
      host: '127.0.0.1',
      port: 9010
    }
  },
  database,
  logger
};
