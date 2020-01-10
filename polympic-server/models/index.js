const BaseModel = require('./base-model');

const Test = new BaseModel('Test');
const Site = new BaseModel('Site');
const Evenement = new BaseModel('Evenement');

module.exports = {
  Test,
  Site,
  Evenement
};
