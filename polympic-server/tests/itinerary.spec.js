const { Event } = require('../models/index');
const Itinerary = require('../controller/itinerarybygraph');

let events = Event.get();

let itinerary = Itinerary.addEvents(events);
itinerary = Itinerary.addAdjacentsEvents(events);
let event = Itinerary.getEvent('fdm1');

console.log(event);

console.log(itinerary);
