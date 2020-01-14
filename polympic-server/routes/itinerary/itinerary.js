const resHandler = require('../../utils/response-handler');
const { itinerary } = require('../../controller');

exports.getEventsByPreferencesandDistance = async (req, res) => {
  let prefs = req.query.prefs;
  let anItinierary = [];
  if (prefs) {
    anItinierary = itinerary.getProximityItinerary(prefs.split(','), 500);
  }
  resHandler.yahResponse(res, anItinierary);
};
