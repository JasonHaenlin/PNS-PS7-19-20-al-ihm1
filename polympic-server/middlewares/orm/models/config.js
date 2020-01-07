const Knex = require('knex');
const connection = require('../../../knexfile');
const { Model } = require('objection');

let property;

switch (process.env.NODE_ENV) {
  case 'staging': property = connection.staging; break;
  case 'production': property = connection.production; break;
  default: property = connection.development; break;
}

// create the link between knex and objection
const knexConnection = Knex(property);
Model.knex(knexConnection);

// export it to create the models for our query
module.exports = Model;
