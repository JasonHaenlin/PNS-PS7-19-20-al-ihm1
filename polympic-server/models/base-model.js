/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-param-reassign */
const fs = require('fs');
const { logTheError } = require('../config/logger');

module.exports = class BaseModel {
  constructor(name) {
    if (!name) {
      throw new Error('You must provide a name in constructor of BaseModel');
    }
    this.items = [];
    this.name = name;
    this.filePath = `${__dirname}/../mocks/${this.name.toLowerCase()}.mocks.json`;
    this.load();
  }

  load() {
    try {
      this.items = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    } catch (err) {
      if (err.message === 'Unexpected end of JSON input') {
        logTheError(`Warning : ${this.filePath} has wrong JSON format`);
      }
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.items, null, 2), 'utf8');
    } catch (err) {
      logTheError(`Error while trying to save ${this.name}`);
    }
  }

  get() {
    return JSON.parse(JSON.stringify(this.items, null, 2));
  }

  getById(id) {
    if (typeof id === 'string') {
      id = parseInt(id, 10);
    }
    const item = this.items.find(i => i.id === id);
    if (!item) {
      logTheError(`Cannot get ${this.name} id=${id} : not found`);
    }
    return item;
  }
};
