/* eslint-disable security/detect-object-injection */
const Events = require('./event');
const Restaurant = require('./restaurant');
const TouristicsSites = require('./touristicsites');
const getHourfromDate = (timestamp) => new Date(timestamp * 1000).getHours();

module.exports = {

  generateItinerary(events) {
    let itinerary = [];
    let Stime = 0;
    let Etime = 0;
    events = Events.sortEvents('startTime', true, events);
    events.forEach(ev => {
      if (ev.startTime !== Stime && ev.startTime >= Etime+1800) {
        let next = Events.retrieveEventWithSameHour(ev, events);
        itinerary.push(next);
        Stime = ev.startTime;
        Etime = ev.endTime;
      }
    });
    return itinerary;
  },

  addTourism(itinerary, number) {
    let newIti = [];
    let start = 0;
    let end = 0;
    let tourism = [];
    TouristicsSites.TouristicSitesWithinDuration();
    for (let i = 0; i < itinerary.length-1; i++) {
      newIti.push(itinerary[i]);
      start = itinerary[i][0].endTime;
      end = itinerary[i+1][0].startTime;
      freeTime = end - start;
      tourism = TouristicsSites.TouristicSitesWithinDuration(freeTime);
    }
  },

  addRestaurant(itinerary, hour) {
    let newIti = [];
    for (let i = 0; i < itinerary.length-1; i++) {
      // eslint-disable-next-line security/detect-object-injection
      hourGroup = getHourfromDate(itinerary[i][0].startTime);
      hourGroupNext = getHourfromDate(itinerary[i+1][0].startTime);
      if (hourGroup < hour) {
        newIti.push(itinerary[i]);
      }
      if (hourGroupNext > hour && hourGroup < hour || hourGroup === hour) {
        resto = Restaurant.getRestaurants();
        resto.forEach(r => {
          r.startTime = itinerary[i][0].startTime+3600;
          r.endTime = r.startTime+3000;
        });
        newIti.push(resto);
      }
      if (hourGroup > hour) {
        newIti.push(itinerary[i]);
      }
    }
    return newIti;
  }

};
