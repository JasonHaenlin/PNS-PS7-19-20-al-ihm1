const AccessDeniedError = require('./access-denied-error');
const NotFoundError = require('./not-found-error');
const UnauthenticatedUserError = require('./unauthenticated-user-error');
const ValidationError = require('./validation-error');

module.exports = {
  AccessDeniedError,
  NotFoundError,
  UnauthenticatedUserError,
  ValidationError
};
