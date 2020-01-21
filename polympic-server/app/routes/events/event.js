const resHandler = require('../../utils/response-handler');
const { event } = require('../../controller');

exports.getEventsByPreferences = async (req, res) => {
  let prefs = req.query.prefs;
  let events;
  let preview = false;
  if (req.query.preview) {
    preview = req.query.preview;
  }
  if (prefs) {
    events = event.filterEventsByProximityAndTags(prefs.split(','), preview);
  } else {
    events = event.getEvents(preview);
  }
  resHandler.yahResponse(res, events);
};
