const BaseModel = require('./base-model');

const Preference = new BaseModel('Preference');
const Event = new BaseModel('Event');
const TouristicSites = new BaseModel('TouristicSites');

module.exports = {
  Preference,
  Event,
  TouristicSites
};
