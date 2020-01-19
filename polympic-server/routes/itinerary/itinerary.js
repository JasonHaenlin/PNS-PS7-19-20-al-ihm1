const resHandler = require('../../utils/response-handler');
const { itinerary } = require('../../controller');

exports.getItinerary = async (req, res) => {
  let prefs = req.query.prefs;
  // let sports = req.query.sports;
  // let handicap = req.query.handicap;
  // let recreations = req.query.recreation;
  // let countries = req.query.countries;
  // let lunch = req.query.lunch;
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

  resHandler.yahResponse(res, r);
};
