const tables = require('../models');

/**
 * All the values are inserted here
 * be sure to create them in the right order
 * when constraints are present
 */

exports.seed = (knex) => {
  return iterPromiseDel(tables.reverse(), knex)
    .then(() => iterPromiseSeed(tables.reverse(), knex));
};

const iterPromiseSeed = (obj, knex) => {
  return obj.reduce(async (previousPromise, nextTables) => {
    await previousPromise;
    return nextTables.seed(knex);
  }, Promise.resolve());
};

const iterPromiseDel = (obj, knex) => {
  return obj.reduce(async (previousPromise, nextTables) => {
    await previousPromise;
    return nextTables.del(knex);
  }, Promise.resolve());
};
