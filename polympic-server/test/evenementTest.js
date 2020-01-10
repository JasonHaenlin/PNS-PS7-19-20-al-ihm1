require('../bin/www');
let assert = require('chai').assert;
const { evenement } = require('../controller');

describe('Liste contenant uniquement certains sports', () => {
  it('Taille d une liste d evenement apres tri par sport', async () => {
    assert.lengthOf(evenement.getSpecificEvenement(['Football', 'Handball']), 6);
  });
});

describe('Liste triée par un critère', () => {
  it('Liste triée par rapport a l heure de début', async () => {
    assert.lengthOf(evenement.getSpecificEvenement(['Football', 'Handball']), 6);
  });
});
