const StepModel = require('../models/step/step-model');
const EventGraph = require('../models/graph/eventgraph');
const { Event } = require('../models');

let events = Event.get();
let eventsmodels = [];
let eventgraph = new EventGraph();

events.forEach(element => {
  eventstep = new StepModel(element.name, element.description, element.site, (element.endTime - element.startTime), element.startTime);
  eventsmodels.push(eventstep);
  eventgraph.addEvent(element);
});

eventgraph.addEdge('fdm1', 'vf1');

console.log(eventgraph);


console.log(eventgraph.getVertex('fdm1'));
console.log(eventgraph.getVertex('vf1'));
