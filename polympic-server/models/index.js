const BaseModel = require('./base-model');

const Preference = new BaseModel('Preference');
const Event = new BaseModel('Event');

module.exports = {
  Preference,
  Event
};
