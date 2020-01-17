require('../bin/www');
const assert = require('chai').assert;
const { restaurant } = require('../controller');

coord = {latitude: 48.922456, longitude: 2.361977};
describe('Obtenir la distance avec les restaurant', () => {
  it('Liste des restaurant', async () => {
    assert.isTrue(restaurant.restaurantsWithDistance(coord)[0].distance > 0);
  });
});
