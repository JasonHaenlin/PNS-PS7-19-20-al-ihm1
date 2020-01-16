/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable security/detect-object-injection */
/* eslint no-eval: 0 */
const _ = require('lodash');
const event = require('./event');
const compiler = require('../utils/compiler');


filterEventsWithShortestTime = (events, childEventsToCheck) => {
  childEventsToCheck = childEventsToCheck || events;
  events.forEach(e => {
    e.next = event.retrieveEventWithinGapHour(e, childEventsToCheck, 0, 2);
  });
  return events;
};

rndNextChild = (event) => {
  return _.sample(event.next);
};

computeEventsByProximity = (coordObj, events, distance) => {
  events = event.measureDistance(coordObj, events);
  return events.filter((e) => e.distance <= distance);
};

constructObjectItinerary = (itinerary, tags) => {
  let objItinerary = {};
  let itineraryEvents = [];
  if (tags.length > 1) {
    objItinerary.label = 'Multi-Disciplines';
  } else {
    objItinerary.label = 'Uni-Discipline';
  }
  objItinerary.description = tags;
  objItinerary.beginDate = itinerary[0].startTime;
  objItinerary.endDate = itinerary[itinerary.length - 1].endTime;
  for (let index = 0; index < itinerary.length; index++) {
    ['next', 'listNearEvents', 'distance'].forEach((k) => {
      delete itinerary[index][k];
    });
    itineraryEvents.push(itinerary[index]);
  }
  objItinerary.events = itineraryEvents;

  return objItinerary;
};

module.exports = {

  getItinerary(tags) {
    return this.filterByScript(tags);
  },

  // use the code in parameter
  runScript(code, tags) {
    const compiledScript = compiler.compileCode(code);
    const distance = eval(compiledScript).run();
    return this.computeItineraryByProximity(tags, distance);
  },

  // use the example script
  filterByScript(tags) {
    const scriptName = './public/scripts/example_2.js';
    const compiledScript = compiler.compile(scriptName);
    const distance = eval(compiledScript).run();
    return this.computeItineraryByProximity(tags, distance);
  },

  computeRandomItinerary(tags) {
    let rndItinerary = [];
    let events = filterEventsWithShortestTime(event.filterEventsByTags(tags));
    let firstEvent = event.retrieveEarliestEvent(events);

    rndItinerary.push(firstEvent);
    let nextEvent = rndNextChild(firstEvent);
    while (nextEvent !== null) {
      rndItinerary.push(event.getEventById(nextEvent));
      nextEvent = event.getEventById(nextEvent);
      nextEvent = rndNextChild(nextEvent);
    }
    return rndItinerary;
  },

  computeItineraryByProximity(tags, distance) {
    let proximityItinerary = [];
    let events = event.getEvents();

    events.forEach(e => {
      latitudeObj = e.site.latitude;
      longitudeObj = e.site.longitude;
      coordObj = { latitude: latitudeObj, longitude: longitudeObj };
      e.listNearEvents = computeEventsByProximity(coordObj, events, distance);
    });
    events = filterEventsWithShortestTime(events);
    let firstEvent = event.retrieveEarliestEvent(events);
    proximityItinerary.push(firstEvent);

    let nextEvent = rndNextChild(firstEvent);
    while (nextEvent) {
      proximityItinerary.push(nextEvent);
      nextEvent = rndNextChild(nextEvent);
    }
    anItinerary = constructObjectItinerary(proximityItinerary, tags);
    return anItinerary;
  }
};
