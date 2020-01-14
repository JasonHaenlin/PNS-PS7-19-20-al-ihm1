/* eslint-disable security/detect-object-injection */
const event = require('./event');
const fs = require('fs');


getNextEvents = (listEvents) => {
  listEvents.forEach(element => {
    element.next = event.getNext(element, listEvents);
  });
  return listEvents;
};


getNextStepItinerary = (event) => {
  if (event.next) {
    let index = Math.floor(Math.random() * (event.next.length));
    return event.next[parseInt(index)];
  }
  return null;
};

getProximityEvents = (coordelement, listEvents, distance) => {
  listNearEvents = [];
  tempevent = event.getDistanceFromEvents(coordelement, listEvents);

  tempevent.forEach(element => {
    if (element.distance <= distance) {
      listNearEvents.push(element.id);
    }
  });
  return listNearEvents;
};

constructObjectItinerary = (itinerary, tags) => {
  let objectitinerary = {};
  let itineraryevents = [];
  if (tags.length > 1) {
    objectitinerary.label = 'Multi-Discipline';
  } else {
    objectitinerary.label = 'Uni-Discipline';
  }
  objectitinerary.description = tags;
  objectitinerary.beginDate = itinerary[0].startTime;
  objectitinerary.endDate = itinerary[itinerary.length - 2].endTime;
  for (let index = 0; index < itinerary.length - 1; index++) {
    ['next', 'listNearEvents'].forEach((k) => {
      delete itinerary[index][k];
    });
    console.log(itinerary[index].listNearEvents);
    itineraryevents.push(itinerary[index]);
  }
  objectitinerary.events = itineraryevents;

  return objectitinerary;
};


writeItinerary = (itinerarytab, tags) => {
  let itinerary = constructObjectItinerary(itinerarytab, tags);
  const jsonitinerary = JSON.stringify(itinerary, null, 2);
  fs.writeFile('../polympic-server/mocks/itinerary.mocks.json', jsonitinerary, err => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success');
    }
  });
};

module.exports = {

  getRandomItinerary(tags) {
    let randomitinerary = [];
    let listEvents = getNextEvents(event.getSpecificEvents(tags));
    let firstEvent = event.getEarliestEvent(listEvents);

    randomitinerary.push(firstEvent);
    let nextevent = getNextStepItinerary(firstEvent);
    while (nextevent !== null) {
      randomitinerary.push(event.getEventById(nextevent));
      nextevent = event.getEventById(nextevent);
      nextevent = getNextStepItinerary(nextevent);
    }
    return randomitinerary;
  },

  getProximityItinerary(tags, distance) {
    let proximityItinerary = [];
    let listEvents = event.getSpecificEvents(tags);
    listEvents.forEach(element => {
      latitudElement = element.site.latitude;
      longitudeElement = element.site.longitude;
      coordelement = { latitude: latitudElement, longitude: longitudeElement };
      element.listNearEvents = getProximityEvents(coordelement, listEvents, distance);
    });
    listEvents = getNextEvents(listEvents);
    let firstEvent = event.getEarliestEvent(listEvents);
    proximityItinerary.push(firstEvent);

    let nextevent = getNextStepItinerary(firstEvent);
    while (nextevent !== null) {
      proximityItinerary.push(event.getEventById(nextevent));
      nextevent = event.getEventById(nextevent);
      nextevent = getNextStepItinerary(nextevent);
    }
    writeItinerary(proximityItinerary, tags);
  }
};
