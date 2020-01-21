const resHandler = require('../../utils/response-handler');
const ansHandler = require('../../utils/answer-handler');
const { itinerary } = require('../../controller');

exports.getItinerary = async (req, res) => {
  let preview = false;
  if (req.query.preview) {
    preview = (req.query.preview === 'true');
  }
  const prefs = {
    sport: ansHandler.parseQuery(req.query.sport),
    handicap: ansHandler.parseQuery(req.query.handicap),
    recreation: ansHandler.parseQuery(req.query.recreation),
    country: ansHandler.parseQuery(req.query.country),
    tourism: ansHandler.parseQuery(req.query.tourism)
  };

  const resIti = itinerary.generateItinerary(prefs, preview);
  resHandler.yahResponse(res, { events: resIti });
};

exports.updateAccessibilityValues = async (req, res) => {
  const acs = ansHandler.parseQuery(req.query.values, [], ',');
  if (acs.lenght === 3) {
    console.log('todo');
  }
  resHandler.yahResponse(res, acs);
};

exports.previewResult = async (req, res) => {
  let code = req.body.code;
  let prefs = req.query.prefs;
  let r = itinerary.generateItinerary(prefs);

  resHandler.yahResponse(res, r);
};
