/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable security/detect-object-injection */
const { Event } = require('../../models');
const _ = require('lodash');
const geolib = require('geolib');
const compiler = require('../utils/compiler');

const SELF = {latitude: 48.922456, longitude: 2.361977};

const getHourfromDate = (timestamp) => new Date(timestamp * 1000).getHours();


module.exports = {
  getEvents() {
    return this.filterByScript();
  },

  // use the code in parameter
  runScript(code) {
    let coords = SELF;
    let events = this.measureDistance(coords, Event.get());
    const compiledScript = compiler.compileCode(code);
    return eval(compiledScript).run(events);
  },

  // use the example script
  filterByScript() {
    let coords = SELF;
    let events = this.measureDistance(coords, Event.get());
    const scriptName = './app/public/scripts/example.script';
    const compiledScript = compiler.compile(scriptName);
    let result;
    try {
      // required for the compiled script
      const lib = require('../utils/compiler/lib');
      result = eval(compiledScript).run(events);
    } catch (e) {
      result = [];
    }
    return result;
  },

  filterEventsByTags(tags, events) {
    events = events || Event.get();
    return events.filter((elem) => tags.includes(elem.sport));
  },

  filterEventsByProximityAndTags(tags, from) {
    let events = this.getEvents();
    from = from || SELF;
    events = this.filterEventsByTags(tags, events);
    events = this.measureDistance(from, events);
    return events;
  },

  sortEvents(prop, asc, events) {
    events = events || Event.get();
    return events.sort((a, b) => {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  },

  /**
     * get the distance between two evetns
     * @param {GeolibInputCoordinates} coord : from this localisation
     * @param {GeolibInputCoordinates} events : to this localisation
     */
  measureDistance(coord, events) {
    events.forEach(event => {
      Vlatitude = event.site.latitude;
      Vlongitude = event.site.longitude;
      coordElem = { latitude: Vlatitude, longitude: Vlongitude };
      let distance = geolib.getDistance(coord, coordElem);
      event.distance = distance;
    });
    return events;
  },

  retrieveEarliestEvent(events) {
    return events.reduce((min, e) => e.startTime < min.startTime ? e : min, events[0]);
  },

  /**
     * Retrives the events that start not too late and not too soon
     * after the selected event
     * @param {*} event the parent event
     * @param {*} events the events where to find the childs
     * @param {*} gapMin the min time in minutes (min)
     * @param {*} gapMax the max time in minutes (min)
     */
  retrieveEventWithinGapHour(event, events, gapMin, gapMax) {
    gapMin = gapMin || 0;
    gapMax = gapMax || 1;
    return _.filter(events, (e) => {
      return _.inRange((getHourfromDate(e.startTime) - getHourfromDate(event.endTime)),
        gapMin, gapMax + 0.1);
    });
  },

  retrieveEventWithSameHour(event, events) {
    return _.filter(events, (e) => getHourfromDate(e.startTime) === getHourfromDate(event.startTime));
  },

  getEventById(ids, events) {
    events = events || Event.get();
    return _.find(events, (e) => e.id === ids);
  }

};