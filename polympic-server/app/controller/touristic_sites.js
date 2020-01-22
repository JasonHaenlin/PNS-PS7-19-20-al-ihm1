const { TouristicSites } = require('../../models');
const _ = require('lodash');
const geolib = require('geolib');

module.exports = {

  getTouristicsSites() {
    return TouristicSites.get();
  },

  TouristicSitesWithinDuration(range) {
    ts = TouristicSites.get();
    return _.filter(ts, (e) => e.duration < range);
  },

  TouristicSitesWithDistance(coord, ts) {
    ts = TouristicSites.get();
    ts.forEach(t => {
      const Vlatitude = t.site.latitude;
      const Vlongitude = t.site.longitude;
      const coordElem = { latitude: Vlatitude, longitude: Vlongitude };
      let distance = geolib.getDistance(coord, coordElem);
      t.distance = distance;
    });
    return ts;
  }
};
