const resHandler = require('../../utils/response-handler');
const ansHandler = require('../../utils/answer-handler');
const { event } = require('../../controller');

exports.getEventsByPreferences = async (req, res) => {
  let preview = false;
  if (req.query.preview) {
    preview = (req.query.preview === 'true');
  }
  const prefs = {
    sport: ansHandler.parseQuery(req.query.sport),
    country: ansHandler.parseQuery(req.query.country)
  };
  const events = event.getEvents(preview, prefs);
  resHandler.yahResponse(res, events);
};
