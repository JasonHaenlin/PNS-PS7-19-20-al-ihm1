const resHandler = require('../../utils/response-handler');
const { restaurant } = require('../../controller');


exports.getPreferencesByTypes = async (req, res) => {
  let coord = req.query.select;
  let resto;
  if (coord) {
    resto = restaurant.restaurantsWithDistance(coord);
  } else {
    resto = restaurant.getRestaurants();
  }
  resHandler.yahResponse(res, resto);
};
