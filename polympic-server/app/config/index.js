require('dotenv').config();
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
  logger
};
