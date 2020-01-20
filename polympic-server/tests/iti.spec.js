const { Event } = require('../models/index');
// const Itinerary = require('../app/controller/itinerarybygraph');
const Itinerary = require('../app/controller/iti');
const Events = require('../app/controller/event');

let iti = Itinerary.generateItinerary();
console.log(iti);

