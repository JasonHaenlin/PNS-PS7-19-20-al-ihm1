const { Preference } = require('../models');

module.exports = {

  getPreferences() {
    return Preference.get();
  },

  getPreferencesByTypes(types) {
    return Preference.get().filter((elem) => types.includes(elem.tag));
  }
};
