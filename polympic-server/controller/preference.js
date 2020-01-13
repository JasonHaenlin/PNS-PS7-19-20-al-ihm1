const { Preference } = require('../models');

module.exports = {
  getPreference() {
    return Preference.get();
  }
};
