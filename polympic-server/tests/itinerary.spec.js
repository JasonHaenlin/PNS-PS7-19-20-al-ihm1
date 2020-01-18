const { Event } = require('../models/index');
const Itinerary = require('../controller/itinerarybygraph');
const Events = require('../controller/event');

let events = Event.get();

let itinerary = Itinerary.addEvents(events);
itinerary = Itinerary.addAdjacentsEvents(events);
let event = Itinerary.getEvent('fdm1');

console.log(event);

console.log(itinerary);


let eventsfiltered = Events.getEvents();

console.log(eventsfiltered);
