const { Event } = require('../models/index');
// const Itinerary = require('../app/controller/itinerarybygraph');
const Itinerary = require('../app/controller/itinerary');
const Events = require('../app/controller/event');

const prefs = {
  sport: ['Football', 'Tennis'],
  handicap: ['Capacité à se déplacer:2'],
  recreation: ['Pause déjeuner'],
  country: ['France', 'Japon'],
  tourism: ['Sites touristiques']
};
Itinerary.access2 = 600;
Itinerary.meal = 14;
let iti = Itinerary.generateItinerary(prefs);
console.log(iti);
