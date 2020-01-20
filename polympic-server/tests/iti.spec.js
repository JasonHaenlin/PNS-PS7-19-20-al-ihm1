const { Event } = require('../models/index');
const Itinerary = require('../app/controller/itinerary');
const Events = require('../app/controller/event');

let events = Event.get();
// console.log(events);

// let iti = Itinerary.computeRandomItinerary(['Football', 'Handball', 'Rugby']);
// let iti = Itinerary.computeItineraryByProximity(['Football', 'Handball', 'Rugby'], 100000);
// console.log(iti);