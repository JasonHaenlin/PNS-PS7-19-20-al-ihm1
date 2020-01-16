require('../bin/www');
const assert = require('chai').assert;
const { event } = require('../controller');

Sevent = {
  id: 'fdm2',
  name: 'Football Demi Finale 1/2 ',
  description: 'La demi finale présentant le match tant attendu Italie vs Espagne, lequel des deux ira en final ? !',
  versus: ['Italie', 'Espagne'],
  sport: 'Football',
  site: {
    name: 'Stade de France A',
    latitude: 48.924459,
    longitude: 2.360164
  },
  startTime: 1667721600,
  endTime: 1667725200
};

Aevents = [{
  id: 'fdm1',
  name: 'Football Demi Finale 1/2 ',
  description: 'La demi finale présentant le match tant attendu Italie vs Espagne, lequel des deux ira en final ? !',
  versus: ['Italie', 'Espagne'],
  sport: 'Football',
  site: {
    name: 'Stade de France A',
    latitude: 48.922456,
    longitude: 2.361977
  },
  startTime: 1667721600,
  endTime: 1667725200
},
{
  id: 'fdm2',
  name: 'Football Demi Finale 2/2 ',
  description: 'La demi finale présentant le match tant attendu France vs Allemagne, lequel des deux ira en final ? !',
  versus: ['France', 'Allemagne'],
  sport: 'Football',
  site: {
    name: 'Stade de France B',
    latitude: 48.922456,
    longitude: 2.365555
  },
  startTime: 1667728800,
  endTime: 1667736000
},
{
  id: 'fdm3',
  name: 'Football Demi Finale 2/2 ',
  description: 'La demi finale présentant le match tant attendu France vs Allemagne, lequel des deux ira en final ? !',
  versus: ['France', 'Allemagne'],
  sport: 'Handball',
  site: {
    name: 'Stade de France B',
    latitude: 58.924459,
    longitude: 2.360164
  },
  startTime: 1667736000,
  endTime: 1667736000
}
];

describe('Obtenir les potentiel événenemets où aller ensuite', () => {
  it('Liste des next possibles pour un événement Sevent donné', async () => {
    assert.isTrue(event.retrieveEventWithinGapHour(Sevent, Aevents)[0].id === 'fdm2');
    assert.isTrue(event.retrieveEventWithinGapHour(Sevent, Aevents).length === 1);
  });
});

describe('Obtenir lévénement qui commence le plus tôt de la journée', () => {
  it('Liste dévénement commencant à des heures différentes', async () => {
    assert.isTrue(event.retrieveEarliestEvent(Aevents).name === 'Football Demi Finale 1/2 ');
  });
});

coord1 = { latitude: 48.922456, longitude: 2.361977 };
describe('Liste donnant la distance entre lutilisateur et un/des événements', () => {
  it('Distance entre deux points identiques', async () => {
    assert.isTrue(event.measureDistance(coord1, Aevents)[0].distance === 0);
  });
  it('Distance entre deux points différents', async () => {
    assert.isTrue(event.measureDistance(coord1, Aevents)[1].distance > 0);
  });
  it('Distance entre deux points très éloignés', async () => {
    assert.isTrue(event.measureDistance(coord1, Aevents)[2].distance > 1000);
  });
});

describe('Liste contenant uniquement sport', () => {
  it('Taille dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.filterEventsByTags(['Football', 'Handball'], Aevents), 3);
  });
  it('Taille dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.filterEventsByTags(['Football'], Aevents), 2);
    assert.isTrue(event.filterEventsByTags(['Football'], Aevents)[0].sport === 'Football');
  });
  it('Taille dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.filterEventsByTags(['Handball'], Aevents), 1);
    assert.isTrue(event.filterEventsByTags(['Handball'], Aevents)[0].sport === 'Handball');
  });
});


describe('Liste triée par un critère', () => {
  it('Liste 2 triée par rapport au nom décroissant', async () => {
    assert.isTrue(event.sortEvents('name', false, Aevents)[0].name === 'Football Demi Finale 2/2 ');
  });
});
