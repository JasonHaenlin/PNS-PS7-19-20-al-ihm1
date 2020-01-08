const { Test } = require('../models')

module.exports = {
    getTest() {
        return Test.get()
    }
};
