const { Site } = require('../models');

module.exports = {
  getSite() {
    return Site.get();
  }
};
