const addElementToDisplay = (output, element) => {
  if (!output.includes(element)) {
    output.push(element);
  }
};

const getEventsMatchingUserPreferences = (array, user_prefs) => {
  return array.filter(e => 
    user_prefs.sport.includes(e.sport) && (user_prefs.country.includes(e.versus[0]) || user_prefs.country.includes(e.versus[1]))
  );
};

const setState = (newStatus, element) => {
  element.status = newStatus;
};

module.exports = {
  addElementToDisplay,
  getEventsMatchingUserPreferences,
  setState
};
