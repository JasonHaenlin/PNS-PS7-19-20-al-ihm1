const util = require('util');

class AccessDeniedError {
  constructor(message, extra = {}) {
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.status = 403;
    this.message = message;
    this.extra = extra;
  }
}

util.inherits(AccessDeniedError, Error);

module.exports = AccessDeniedError;
