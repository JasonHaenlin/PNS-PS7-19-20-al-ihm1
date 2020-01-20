const { Event } = require('../models/index');
// const Itinerary = require('../app/controller/itinerarybygraph');
const Itinerary = require('../app/controller/iti');
const Events = require('../app/controller/event');

let events = Event.get();

let iti = Itinerary.generateItinerary(events);
iti = Itinerary.addRestaurant(iti, 13);
iti = Itinerary.addTourism(iti, 2);