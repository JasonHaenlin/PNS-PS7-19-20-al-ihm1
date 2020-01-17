const { Graph } = require('../models/index');
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
getEvent = (id) => {
  return graphevent.getVertex(id);
};
module.exports = {
  addEvents,
  addAdjacentsEvents,
  getEvent
};
