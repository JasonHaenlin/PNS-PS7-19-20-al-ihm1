/* eslint-disable no-undefined */
/* eslint-disable no-loop-func */
/* eslint-disable security/detect-object-injection */
const Events = require('./event');
const { Event } = require('../../models');
const Restaurant = require('./restaurant');
const TouristicsSites = require('./touristic_sites');
const getHourfromDate = (timestamp) => new Date(timestamp * 1000).getHours();

module.exports = {
  generateItinerary(prefs) {
    let events = Event.get();
    let itinerary = [];
    let Stime = 0;
    let Etime = 0;
    events = Events.sortEvents('startTime', true, events);
    events.forEach(ev => {
      if (ev.startTime !== Stime && ev.startTime >= Etime + 1800) {
        let next = Events.retrieveEventWithSameHour(ev, events);
        itinerary.push(next);
        Stime = ev.startTime;
        Etime = ev.endTime;
      }
    });
    if (prefs !== undefined && prefs.includes('Pause déjeuner')) {
      itinerary = this.addRestaurant(itinerary, 12);
    }
    if (prefs !== undefined && prefs.includes('Sites touristiques')) {
      itinerary = this.addTourism(itinerary);
    }
    return itinerary;
  },

  addRestaurant(itinerary, hour) {
    let newIti = [];
    let restoB = false;
    let resto = Restaurant.getRestaurants();
    for (let i = 0; i < itinerary.length; i++) {
      // eslint-disable-next-line security/detect-object-injection
      let dateGroup = itinerary[i][0].startTime;
      if (i < itinerary.length - 1) {
        dateGroupNext = itinerary[i + 1][0].startTime;
      }
      let hourGroup = getHourfromDate(dateGroup);
      if (i < itinerary.length - 1) {
        hourGroupNext = getHourfromDate(dateGroupNext);
      }
      if (hourGroup < hour) {
        newIti.push(itinerary[i]);
      }
      if (i < itinerary.length - 1) {
        if (hourGroupNext > hour && hourGroup < hour || hourGroup === hour) {
          resto.forEach(r => {
            r.startTime = itinerary[i][0].startTime + 3600;
            r.endTime = r.startTime + 3000;
          });
          newIti.push(resto);
          restoB = true;
        }
      }
      if (hourGroup > hour) {
        newIti.push(itinerary[i]);
      }
    }
    if (!restoB && itinerary.length > 0) {
      resto.forEach(r => {
        r.startTime = dateGroup + 7200;
        r.endTime = r.startTime + 3000;
      });
      newIti.push(resto);
    }
    return newIti;
  },

  addTourism(itinerary) {
    let newIti = [];
    let start = 0;
    let end = 0;
    let tourism = [];
    TouristicsSites.TouristicSitesWithinDuration();
    for (let i = 0; i < itinerary.length; i++) {
      newIti.push(itinerary[i]);
      start = itinerary[i][0].endTime;
      if (i < itinerary.length - 1) {
        end = itinerary[i + 1][0].startTime;
      } else {
        end = 1000000;
      }
      freeTime = end - start;
      tourism = TouristicsSites.TouristicSitesWithinDuration(freeTime);
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
