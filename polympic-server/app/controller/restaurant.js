const { Restaurant } = require('../../models');
// const _ = require('lodash');
const geolib = require('geolib');

module.exports = {

  getRestaurants() {
    return Restaurant.get();
  },

  restaurantsWithDistance(coord) {
    restos = Restaurant.get();
    restos.forEach(resto => {
      const Vlatitude = resto.site.latitude;
      const Vlongitude = resto.site.longitude;
      const coordElem = { latitude: Vlatitude, longitude: Vlongitude };
      let distance = geolib.getDistance(coord, coordElem);
      resto.distance = distance;
    });
    return restos;
  }
};
