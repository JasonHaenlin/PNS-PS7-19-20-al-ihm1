const resHandler = require('../../utils/response-handler');
const { preference } = require('../../controller');


exports.getPreferencesByTypes = async (req, res) => {
  let selected = req.query.select;
  let preferences;
  if (selected) {
    preferences = preference.getPreferencesByTypes(selected.split(','));
  } else {
    preferences = preference.getPreferences();
  }
  resHandler.yahResponse(res, preferences);
};
