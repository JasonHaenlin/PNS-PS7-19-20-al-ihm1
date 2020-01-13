const resHandler = require('../../utils/response-handler');
const { test } = require('../../controller');

/* GET users listing. */
exports.getSource = async (req, res) => {
  const t = await test.getTest();
  resHandler.yahResponse(res, 'respond with a resource ' + t[0].test);
};
