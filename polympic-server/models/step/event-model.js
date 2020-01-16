const StepModel = require('./step-model');

module.exports = class EventModel extends StepModel {
  constructor(name, description, position, duration, startTime) {
    super(name, description, position, duration);
    this.startTime = startTime;
  }
};
