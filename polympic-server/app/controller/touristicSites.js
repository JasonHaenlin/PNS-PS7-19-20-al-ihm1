const { TouristicSites } = require('../../models');
const _ = require('lodash');

module.exports = {

  getTouristicsSites() {
    return TouristicSites.get();
  },

  TouristicSitesWithinDuration(range) {
    ts = TouristicSites.get();
    return _.filter(ts, (e) => e.duration < range);
  }
};
