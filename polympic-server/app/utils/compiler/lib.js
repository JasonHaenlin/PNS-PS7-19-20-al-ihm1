const addElementToDisplay = (output, element) => {
  if (!output.includes(element)) {
    output.push(element);
  }
};

const getEventsMatchingUserPreferences = (array, user_prefs) => {
  return array.filter(e => user_prefs.includes(e.sport));
};

const setState = (newStatus, element) => {
  element.status = newStatus;
};

module.exports = {
  addElementToDisplay,
  getEventsMatchingUserPreferences,
  setState
};
