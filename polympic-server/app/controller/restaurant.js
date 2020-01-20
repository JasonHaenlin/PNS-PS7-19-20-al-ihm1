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
      Vlatitude = resto.site.latitude;
      Vlongitude = resto.site.longitude;
      coordElem = { latitude: Vlatitude, longitude: Vlongitude };
      let distance = geolib.getDistance(coord, coordElem);
      resto.distance = distance;
    });
    return restos;
  }
};
