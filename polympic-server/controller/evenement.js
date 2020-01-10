const { Evenement } = require('../models');

module.exports = {
  getEvenement() {
    console.log(Evenement.get);
    return Evenement.get();
  }

};
