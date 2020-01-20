const { Graph } = require('../../models');
const Events = require('./event');

let graphevent = new Graph();

addEvents = (events) => {
  events.forEach(element => {
    graphevent.addVertex(element.id);
  });
  return graphevent;
};

addAdjacentsEvents = (events) => {
  events.forEach(element => {
    let next = Events.retrieveEventWithinGapHour(element, events);
    next.forEach(ev => {
      graphevent.addEdge(element.id, ev.id);
    });
  });
  return graphevent;
};

addSimilarEvents = (events) => {
  events.forEach(element => {
    let next = Events.retrieveEventWithSameHour(element, events);
    next.forEach(ev => {
      graphevent.addAnotherEdge(element.id, ev.id);
    });
  });
  return graphevent;
};

getEvent = (id) => {
  return graphevent.getVertex(id);
};

module.exports = {
  addEvents,
  addAdjacentsEvents,
  addSimilarEvents,
  getEvent
};
