const { Event } = require('../models/index');
// const Itinerary = require('../app/controller/itinerarybygraph');
const Itinerary = require('../app/controller/itinerary');
const Events = require('../app/controller/event');


let prefs = ['Pause déjeuner', 'Sites touristiques'];
Itinerary.access1 = 600;
let iti = Itinerary.generateItinerary(false, prefs);

