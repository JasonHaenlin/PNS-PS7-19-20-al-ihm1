const resHandler = require('../../utils/response-handler');
const { itinerary } = require('../../controller');

exports.getEventsByPreferencesandDistance = async (req, res) => {
  let prefs = req.query.prefs;
  let anItinierary = [];
  if (prefs) {
    anItinierary.push(itinerary.getItinerary(prefs.split(',')));
  }
  resHandler.yahResponse(res, anItinierary);
};


exports.previewResult = async (req, res) => {
  let code = req.body.code;
  let prefs = req.query.prefs;
  let r = itinerary.runScript(code, prefs.split(','));
  console.log(r);
  resHandler.yahResponse(res, r);
};
