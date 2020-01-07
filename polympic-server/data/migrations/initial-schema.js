const tables = require('../models');

/**
 * All the table are created here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.up = (knex) => {
  return tables.reduce(async (previousPromise, nextTables) => {
    await previousPromise;
    return nextTables.up(knex);
  }, Promise.resolve());
};

exports.down = (knex) => {
  return tables.reverse().reduce(async (previousPromise, nextTables) => {
    await previousPromise;
    return nextTables.down(knex);
  }, Promise.resolve());
};
