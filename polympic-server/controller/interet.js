const { Interet } = require('../models');

module.exports = {
  getInteret() {
    return Interet.get();
  }
};
