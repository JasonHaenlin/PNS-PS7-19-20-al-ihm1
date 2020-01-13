const event = require("./event");


getNextEvents = (listEvents) => {
    listEvents.forEach(element => {
        element.next = event.getNext(element, listEvents);
    });
    return listEvents;
};


getNextStepItinerary = (event) => {
    if (event.next != null) {
        var index = Math.floor(Math.random() * (event.next.length));
        return event.next[index];
    }
};

module.exports = {

    getRandomItinerary(tags) {
        let randomitinerary = [];
        let listEvents = getNextEvents(event.getSpecificEvents(tags));
        let firstEvent = event.getEarliestEvent(listEvents);

        randomitinerary.push(firstEvent);
        var nextevent = getNextStepItinerary(firstEvent);
        while (nextevent != null) {
            randomitinerary.push(event.getEventById(nextevent));
            nextevent = event.getEventById(nextevent);
            nextevent = getNextStepItinerary(nextevent);
        };
        return randomitinerary;
    }
};