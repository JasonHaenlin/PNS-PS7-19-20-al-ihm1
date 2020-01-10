const { Evenement } = require('../models');

module.exports = {
  getEvenement() {
    return Evenement.get();
  },

  getSpecificEvenement(types) {
    let collection = Evenement.get();
    let empty = [];
    types.forEach(type => {
      collection.forEach(element => {
        if (element.sport === type) {
          empty.push(element);
        }
      });
    });
    return empty;
  }

};
