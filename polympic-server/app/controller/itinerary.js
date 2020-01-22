/* eslint-disable no-undefined */
/* eslint-disable no-loop-func */
/* eslint-disable security/detect-object-injection */
const Events = require('./event');
const Restaurant = require('./restaurant');
const TouristicsSites = require('./touristic_sites');
const compiler = require('../utils/compiler');
const getHourfromDate = (timestamp) => new Date(timestamp * 1000).getHours();
const SELF = { latitude: 48.922456, longitude: 2.361977 };

global.access1 = 2;
global.access2 = 5;
global.access3 = 10;
global.meal = 12;

module.exports = {
  generateItinerary(prefs, preview) {
    let events = Events.getEvents(preview, prefs);
    let itinerary = [];
    let Stime = 0;
    let Etime = 0;
    if (prefs.handicap.length > 0) {
      if (prefs.handicap[0].split(':')[1] === '1') {
        access = global.access1 * 60;
      }
      if (prefs.handicap[0].split(':')[1] === '2') {
        access = global.access2 * 60;
      }
      if (prefs.handicap[0].split(':')[1] === '3') {
        access = global.access3 * 60;
      }
    }
    events = Events.sortEvents('startTime', true, events);
    events.forEach(ev => {
      if (ev.startTime !== Stime && ev.startTime >= Etime + access) {
        let next = Events.retrieveEventWithSameHour(ev, events);
        itinerary.push(next);
        Stime = ev.startTime;
        Etime = ev.endTime;
      }
    });
    if (prefs.recreation.includes('Pause déjeuner')) {
      itinerary = this.addRestaurant(itinerary, access);
    }
    if (prefs.tourism.includes('Sites touristiques')) {
      itinerary = this.addTourism(itinerary, access);
    }


    let scriptName;
    if (preview) {
      scriptName = './app/public/scripts/preview_itineraries.script';
    } else {
      scriptName = './app/public/scripts/itineraries.script';
    }
    const compiledScript = compiler.compile(scriptName);
    let result = [];
    try {
      // required for the compiled script
      // pass prefs to the compiler
      const lib = require('../utils/compiler/lib');
      const runScript = eval(compiledScript).run;
      for (const group of itinerary) {
        result.push(runScript(group, prefs));
      }
    } catch (e) {
      result = [];
    }


    return result;
  },

  addRestaurant(itinerary, access) {
    let newIti = [];
    let restoB = false;
    let resto = Restaurant.getRestaurants();
    resto = Restaurant.restaurantsWithDistance(SELF, resto);
    let dateGroup;
    let hourGroup;
    let dateGroupNext;
    let hourGroupNext;
    for (let i = 0; i < itinerary.length; i++) {
      dateGroup = itinerary[i][0].startTime;
      hourGroup = getHourfromDate(dateGroup);
      if (hourGroup < global.meal) {
        newIti.push(itinerary[i]);
      }
      if (i < itinerary.length - 1) {
        dateGroupNext = itinerary[i + 1][0].startTime;
        hourGroupNext = getHourfromDate(dateGroupNext);
        if (hourGroupNext > global.meal && hourGroup < global.meal || hourGroup === global.meal) {
          resto.forEach(r => {
            r.startTime = itinerary[i][0].startTime + 3600 + access;
            r.endTime = (r.startTime + 3600) - access * 2;
          });
          newIti.push(resto);
          restoB = true;
        }
      }
      if (hourGroup > global.meal) {
        newIti.push(itinerary[i]);
      }
    }
    if (!restoB && itinerary.length > 0) {
      resto.forEach(r => {
        r.startTime = dateGroup + 7200 + access;
        r.endTime = r.startTime + 3000 - access;
      });
      newIti.push(resto);
    }
    return newIti;
  },

  addTourism(itinerary, access) {
    let newIti = [];
    let start = 0;
    let end = 0;
    let tourism = [];
    TouristicsSites.TouristicSitesWithinDuration();
    for (let i = 0; i < itinerary.length; i++) {
      newIti.push(itinerary[i]);
      start = itinerary[i][0].endTime + access;
      if (i < itinerary.length - 1) {
        end = itinerary[i + 1][0].startTime - access;
      } else {
        end = 1000000 - access;
      }
      freeTime = end - start;
      tourism = TouristicsSites.TouristicSitesWithinDuration(freeTime);
      tourism = TouristicsSites.TouristicSitesWithDistance(SELF, tourism);
      if (freeTime > 600) {
        tourism.forEach(t => {
          t.startTime = start;
          t.endTime = start + t.duration;
        });
        newIti.push(tourism);
      }
    }
    return newIti;
  }

};
