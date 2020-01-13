const resHandler = require('../../utils/response-handler');
const { event } = require('../../controller');

exports.getEventsByPreferences = async (req, res) => {
  let prefs = req.query.prefs;
  let events;
  if (prefs) {
    events = event.getSpecificEvents(prefs.split(','));
  } else {
    events = event.getEvents();
  }
  resHandler.yahResponse(res, events);
};
