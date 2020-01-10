const { Evenement } = require('../models');

module.exports = {
  getEvenement() {
    return Evenement.get();
  }
};
