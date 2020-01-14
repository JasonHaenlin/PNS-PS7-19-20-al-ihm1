const resHandler = require('../../utils/response-handler');
const { itinerary } = require('../../controller');
const event = require('../../controller/event');

exports.getEventsByPreferencesandDistance = async(req, res) => {
    let prefs = req.query.prefs;
    let anItinierary;
    if (prefs) {
        anItinierary = itinerary.getProximityItinerary(prefs.split(','), 500);
    } else {
        event.getEvents();
    }
    resHandler.yahResponse(res, anItinierary);
};