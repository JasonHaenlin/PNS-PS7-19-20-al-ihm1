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

exports.updateConfig = async (req, res) => {
  if (req.body.value.length === 4) {
    global.access1 = Number(req.body.value[0]);
    global.access2 = Number(req.body.value[1]);
    global.access3 = Number(req.body.value[2]);
    global.meal = Number(req.body.value[3]);
    console.log(global.access1);
    console.log(global.access2);
    console.log(global.access3);
    console.log(global.meal);
  }
  resHandler.yahResponse(res, req.body.value);
};

exports.getConfig = async (req, res) => {
  resHandler.yahResponse(res, {
    value: [
      global.access1,
      global.access2,
      global.access3,
      global.meal
    ]
  });
};
