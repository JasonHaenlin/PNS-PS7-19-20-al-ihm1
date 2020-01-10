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
  },

  getSortedEvenement(prop, asc) {
    let collection = Evenement.get();
    return collection.sort(function sort(a, b) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      } else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

};
