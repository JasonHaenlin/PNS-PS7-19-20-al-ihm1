/* we will be centralizing all the responses at one place */

module.exports = {
  /* for all the positive response */
  yahResponse: async (res, data, create = false) => {
    if (create) {
      res.status(201).json(data);
    } else {
      res.status(200).json(data);
    }
  },
  /* when something goes wrong */
  nahResponse: async (res, error, status = 500) => {
    res.status(500).json({ code: status, error: error });
  },
  /* when we want send manual error messages */
  errorMessage: async (res, message, status = 200) => {
    res.status(200).json({ code: status, message });
  }
};
