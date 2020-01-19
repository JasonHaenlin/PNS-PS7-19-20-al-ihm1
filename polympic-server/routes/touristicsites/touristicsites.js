const resHandler = require('../../utils/response-handler');
const { touristicSites } = require('../../controller');


exports.TouristicSitesWithinDuration = async (req, res) => {
  let duration = req.query.select;
  let touristicSite;
  if (duration) {
    touristicSite = touristicSites.TouristicSitesWithinDuration(duration);
  } else {
    touristicSite = touristicSites.getTouristicsSites();
  }
  resHandler.yahResponse(res, touristicSite);
};
