const BaseModel = require('./base-model');

const Preference = new BaseModel('Preference');
const Event = new BaseModel('Event');
const TouristicSites = new BaseModel('TouristicSites');
const Restaurant = new BaseModel('Restaurant');

module.exports = {
  Preference,
  Event,
  TouristicSites,
  Restaurant
};
