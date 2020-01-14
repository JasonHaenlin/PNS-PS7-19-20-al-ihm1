/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable security/detect-object-injection */
const { Event } = require('../models');
const geolib = require('geolib');
const compiler = require('../utils/compiler');

module.exports = {
    getEvents() {
      return this.filterByScript();
    },

    // use the code in parameter
    runScript(code) {
        let coords = {"latitude": 48.924298,
        "longitude": 2.359805}
        let events = this.getDistanceFromEvents(coords, Event.get());
        const compiledScript = compiler.compileCode(code);
        return eval(compiledScript).run(events);
    },

    // use the example script
    filterByScript() {
        let events = this.getDistanceFromEvents(Event.get());
        const scriptName = './public/scripts/example.js';
        const compiledScript = compiler.compile(scriptName);
        return eval(compiledScript).run(events);
    },

    getSpecificEvents(tags) {
        const events = Event.get();
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

    getProximityEvents(tags) {
        Eiffel_Tower_coord = { latitude: 48.858370, longitude: 2.294481 };
        listEvents = this.getSpecificEvents(tags);
        listEvents = this.getDistanceFromEvents(Eiffel_Tower_coord, listEvents);
        return listEvents;
    },

    getSpecificListEvents(tags, events) {
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

    getSortedEvents(prop, asc) {
        let events = Event.get();
        return events.sort((a, b) => {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            } else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
    },

    getSortedListEvents(prop, asc, events) {
        return events.sort((a, b) => {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            } else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
            }
        });
    },

    getDistanceFromEvents(coord, events) {
      events.forEach(event => {
            Vlatitude = event.site.latitude;
            Vlongitude = event.site.longitude;
            coordElem = { latitude: Vlatitude, longitude: Vlongitude };
            let distance = geolib.getDistance(coord, coordElem);
            event.distance = distance;
        });
        return events;
    },

    getEarliestEvent(events) {
        let min = 23;
        let minEvent;
        events.forEach(event => {
            let date = new Date(event.startTime * 1000);
            let hour = date.getHours();
            if (hour < min) {
                min = hour;
                minEvent = event;
            }
        });
        return minEvent;
    },

    getNext(event, Nevents) {
        let date = new Date(event.endTime * 1000);
        let hour = date.getHours();
        let next = [];
        Nevents.forEach(Nevent => {
            let Ndate = new Date(Nevent.startTime * 1000);
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
    },

    getListEventsById(ids, events) {
        for (const e of events) {
            if (e.id === ids) {
                return e;
            }
        }
        return 0;
    }

};