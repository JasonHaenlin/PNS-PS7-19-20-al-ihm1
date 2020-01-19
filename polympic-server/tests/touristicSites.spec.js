require('../bin/www');
const assert = require('chai').assert;
const { touristicSites } = require('../controller');

describe('Obtenir les possibles lieux touristiques', () => {
  it('Liste des next quand il ny a pas de temps', async () => {
    assert.isTrue(touristicSites.TouristicSitesWithinDuration(0).length === 0);
  });
  it('Liste des next quand il y a beaucoup de temps', async () => {
    assert.isTrue(touristicSites.TouristicSitesWithinDuration(1000000).length > 0);
  });
});
