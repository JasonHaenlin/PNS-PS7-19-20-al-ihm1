require('../bin/www');
let assert = require('chai').assert;
const { evenement } = require('../controller');

describe('Liste triée par sports', () => {
  it('Taille d une liste d evenement apres tri par sport', async () => {
    assert.lengthOf(evenement.getSpecificEvenement(['Football', 'Handball']), 6);
  });
});
