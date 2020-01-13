require('../bin/www');
let assert = require('chai').assert;
const { event } = require('../controller');

// events = evenement.getEvenement();
// coord1 = {latitude: 51.525, longitude: 7.4575};
// console.log(evenement.getDistance(coord1, events));

describe('Liste contenant uniquement certains sports', () => {
  it('Taille d une liste d evenement apres tri par sport', async () => {
    assert.lengthOf(event.getSpecificEvent(['Football', 'Handball']), 6);
  });
});

describe('Liste triée par un critère', () => {
  it('Liste triée par rapport a l heure de début', async () => {
    assert.lengthOf(event.getSpecificEvent(['Football', 'Handball']), 6);
  });
});
