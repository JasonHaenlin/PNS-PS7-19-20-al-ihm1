const { Event } = require('../models');
const geolib = require('geolib');

module.exports = {
  getEvents() {
    return Event.get();
  },

  getSpecificEvent(tags) {
    let events = Event.get();
    let empty = [];
    tags.forEach(type => {
      events.forEach(element => {
        if (element.sport === type) {
          empty.push(element);
        }
      });
    });
    return empty;
  },

  getSortedEvent(prop, asc) {
    let events = Event.get();
    return events.sort((a, b) => {
      if (asc) {
        // eslint-disable-next-line security/detect-object-injection
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        // eslint-disable-next-line security/detect-object-injection
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  },

  getDistanceEvent(coord, events) {
    // eslint-disable-next-line security/detect-object-injection
    events.forEach(event => {
      Vlatitude = event.site.latitude;
      Vlongitude = event.site.longitude;
      coordElem = { latitude: Vlatitude, longitude: Vlongitude };
      event.distance = geolib.getDistance(coord, coordElem);
    });
    return events;
  },

  getEarliestEvent(events) {
    let min = 23;
    let minEvent;
    events.forEach(event => {
      let date = new Date(event.startTime*1000);
      let hour = date.getHours();
      if (hour < min) {
        min = hour;
        minEvent = event;
      }
    });
    return minEvent;
  },

  getNext(event, Nevents) {
    let date = new Date(event.endTime*1000);
    let hour = date.getHours();
    let next = [];
    Nevents.forEach(Nevent => {
      let Ndate = new Date(Nevent.startTime*1000);
      let Nhour = Ndate.getHours();
      if ((Nhour - hour) <= 1 && (Nhour - hour) >= 0) {
        next.push(Nevent.id);
      }
    });
    return next;
  },

  getEventById(ids) {
    let events = Event.get();
    for (const e of events) {
      if (e.id === ids) {
        return e;
      }
    }
    return 0;
  }

};
