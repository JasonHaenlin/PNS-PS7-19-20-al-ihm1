/* eslint-disable security/detect-object-injection */
const event = require('./event');
const fs = require('fs');
const compiler = require('../utils/compiler');


getNextEvents = (listEvents) => {
    listEvents.forEach(element => {
        element.next = event.getNext(element, listEvents);
    });
    return listEvents;
};

getNextWithDistanceEvents = (listEvents) => {
    listEvents.forEach(element => {
        element.next = event.getNext(element, element.listNearEvents);
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
            listNearEvents.push(element);
        }
    });
    return listNearEvents;
};

constructObjectItinerary = (itinerary, tags) => {
    let objectitinerary = {};
    let itineraryevents = [];
    if (tags.length > 1) {
        objectitinerary.label = 'Multi-Disciplines';
    } else {
        objectitinerary.label = 'Uni-Discipline';
    }
    objectitinerary.description = tags;
    objectitinerary.beginDate = itinerary[0].startTime;
    objectitinerary.endDate = itinerary[itinerary.length - 2].endTime;
    for (let index = 0; index < itinerary.length - 1; index++) {
        ['next', 'listNearEvents', 'distance'].forEach((k) => {
            delete itinerary[index][k];
        });
        itineraryevents.push(itinerary[index]);
    }
    objectitinerary.events = itineraryevents;

    return objectitinerary;
};


/*writeItinerary = (itinerary) => {
  const jsonitinerary = JSON.stringify(itinerary, null, 2);
  console.log(jsonitinerary);

  fs.writeFile('../polympic-server/mocks/itinerary.mocks.json', jsonitinerary, err => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success');
    }
  });
};*/

module.exports = {

    getItinerary(tags) {
        return this.filterByScript(tags);
    },

    // use the code in parameter
    runScript(code, tags) {
        const compiledScript = compiler.compileCode(code);
        const distance = eval(compiledScript).run();
        return this.getProximityItinerary(tags, distance);
    },

    // use the example script
    filterByScript(tags) {
        const scriptName = './public/scripts/example_2.js';
        const compiledScript = compiler.compile(scriptName);
        const distance = eval(compiledScript).run();
        return this.getProximityItinerary(tags, distance);
    },

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
        listEvents = getNextWithDistanceEvents(listEvents);
        let firstEvent = event.getEarliestEvent(listEvents);
        proximityItinerary.push(firstEvent);

        let nextevent = getNextStepItinerary(firstEvent);
        while (nextevent !== null) {
            proximityItinerary.push(event.getEventById(nextevent));
            nextevent = event.getEventById(nextevent);
            nextevent = getNextStepItinerary(nextevent);
        }
        anItinerary = constructObjectItinerary(proximityItinerary, tags);
        //writeItinerary(anItinerary);
        return anItinerary;
    }
};