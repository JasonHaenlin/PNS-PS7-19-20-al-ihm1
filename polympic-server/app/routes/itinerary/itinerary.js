const resHandler = require('../../utils/response-handler');
const ansHandler = require('../../utils/answer-handler');
const { itinerary } = require('../../controller');

exports.getItinerary = async (req, res) => {
  const prefs = {
    sport: ansHandler.parseQuery(req.query.sport),
    handicap: ansHandler.parseQuery(req.query.handicap),
    recreation: ansHandler.parseQuery(req.query.recreation),
    country: ansHandler.parseQuery(req.query.country),
    lunch: ansHandler.parseQuery(req.query.lunch)
  };
  const resIti = itinerary.generateItinerary(prefs);
  resHandler.yahResponse(res, resIti);
};

exports.previewResult = async (req, res) => {
  let code = req.body.code;
  let prefs = req.query.prefs;
  let r = itinerary.generateItinerary();

  resHandler.yahResponse(res, r);
};
