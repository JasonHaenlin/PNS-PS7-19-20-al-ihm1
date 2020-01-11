const { Evenement } = require('../models');
const geolib = require('geolib');

module.exports = {
  getEvenement() {
    return Evenement.get();
  },

  getSpecificEvenement(types) {
    let collection = Evenement.get();
    let empty = [];
    types.forEach(type => {
      collection.forEach(element => {
        if (element.sport === type) {
          empty.push(element);
        }
      });
    });
    return empty;
  },

  getSortedEvenement(prop, asc) {
    let collection = Evenement.get();
    return collection.sort(function sort(a, b) {
      if (asc) {
        // eslint-disable-next-line security/detect-object-injection
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        // eslint-disable-next-line security/detect-object-injection
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  },

  getDistanceEvenement(coord, collection) {
    // eslint-disable-next-line security/detect-object-injection
    collection.forEach(element => {
      Vlatitude = element.site.latitude;
      Vlongitude = element.site.longitude;
      coordElem = {latitude: Vlatitude, longitude: Vlongitude};
      element.distance = geolib.getDistance(coord, coordElem);
    });
    return collection;
  }

};
