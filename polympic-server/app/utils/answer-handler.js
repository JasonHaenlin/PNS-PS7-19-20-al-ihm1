module.exports = {
  parseQuery: (query, defaultReturn = [], separator = ',') => {
    if (query === null || !query) {
      return defaultReturn;
    }
    return query.split(separator);
  }
};
