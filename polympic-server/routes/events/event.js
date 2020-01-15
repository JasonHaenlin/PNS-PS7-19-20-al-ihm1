const resHandler = require('../../utils/response-handler');
const { event } = require('../../controller');

exports.getEventsByPreferences = async(req, res) => {
    let prefs = req.query.prefs;
    let events;
    if (prefs) {
        events = event.getProximityEvents(prefs.split(','));
        events.forEach(element => {
            if (element.listNearEvents) {
                delete element.listNearEvents;
            }
        });
        console.log(events);

    } else {
        events = event.getEvents();
    }
    resHandler.yahResponse(res, events);
};

exports.previewResult = async(req, res) => {
    let code = req.body.code;
    resHandler.yahResponse(res, event.runScript(code));
};