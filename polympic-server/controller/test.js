const { Test } = require('../middlewares/orm')

module.exports = {
    getTest() {
        return Test.query();
    }
};
