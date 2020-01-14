require('../bin/www');
const assert = require('chai').assert;
const { event } = require('../controller');
// const itinerary = require('../controller/itinerary');

// console.log(itinerary.getRandomItinerary(['Handball']));

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


describe('Obtenir les informations dun événement via son id', () => {
  it('Recherche dun événement par son id', async () => {
    assert.isTrue(event.getEventById('fdm2').name === 'Football Demi Finale 2/2 ');
  });
  it('Recherche dun second événement par son id', async () => {
    assert.isTrue(event.getEventById('vf1').name === 'Volley Finale 1/1 ');
  });
  it('Recherche dun second événement par son id', async () => {
    assert.isTrue(event.getListEventsById('fdm1', Aevents).name === 'Football Demi Finale 1/2 ');
  });
});

describe('Obtenir les potentiel événemenets où aller ensuite', () => {
  it('Liste des next possibles pour un événement Sevent donné', async () => {
    assert.isTrue(event.getNext(Sevent, Aevents)[0] === 'fdm2');
    assert.isTrue(event.getNext(Sevent, Aevents).length === 1);
  });
});

describe('Obtenir lévénement qui commence le plus tôt de la journée', () => {
  it('Liste dévénement commencant à des heures différentes', async () => {
    assert.isTrue(event.getEarliestEvent(Aevents).name === 'Football Demi Finale 1/2 ');
  });
});

coord1 = { latitude: 48.922456, longitude: 2.361977 };
describe('Liste donnant la distance entre lutilisateur et un/des événements', () => {
  it('Distance entre deux points identiques', async () => {
    assert.isTrue(event.getDistanceFromEvents(coord1, Aevents)[0].distance === 0);
  });
  it('Distance entre deux points différents', async () => {
    assert.isTrue(event.getDistanceFromEvents(coord1, Aevents)[1].distance > 0);
  });
  it('Distance entre deux points très éloignés', async () => {
    assert.isTrue(event.getDistanceFromEvents(coord1, Aevents)[2].distance > 1000);
  });
});

describe('Liste contenant uniquement sport', () => {
  it('Taille dune liste devenements avec du foot, du hand, et de la pétanque', async () => {
    assert.lengthOf(event.getSpecificEvents(['Football', 'Handball', 'Pétanque']), 7);
  });
  it('Taille dune liste devenements avec du foot et du hand', async () => {
    assert.lengthOf(event.getSpecificEvents(['Football', 'Handball']), 6);
  });
  it('Taille dune liste devenements avec du foot', async () => {
    assert.lengthOf(event.getSpecificEvents(['Football']), 2);
    assert.isTrue(event.getSpecificEvents(['Football'])[0].sport === 'Football');
  });
  it('Taille dune liste devenements avec de la pétanque', async () => {
    assert.lengthOf(event.getSpecificEvents(['Pétanque']), 1);
    assert.isTrue(event.getSpecificEvents(['Pétanque'])[0].sport === 'Pétanque');
  });
  it('Taille dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.getSpecificEvents(['Handball']), 4);
    assert.isTrue(event.getSpecificEvents(['Handball'])[0].sport === 'Handball');
  });
  it('Taille 2 dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.getSpecificListEvents(['Handball'], Aevents), 1);
    assert.isTrue(event.getSpecificEvents(['Handball'], Aevents)[0].sport === 'Handball');
  });
});


describe('Liste triée par un critère', () => {
  it('Liste triée par rapport a lheure de départ décroissant', async () => {
    assert.isTrue(event.getSortedEvents('startTime', false)[0].name === 'Pétanque Finale 1');
  });
  it('Liste triée par rapport au nom décroissant', async () => {
    assert.isTrue(event.getSortedEvents('name', false)[0].name === 'Volley Finale 1/1 ');
  });
  it('Liste 2 triée par rapport au nom décroissant', async () => {
    console.log(event.getSortedListEvents('name', false, Aevents)[0].name);
    assert.isTrue(event.getSortedListEvents('name', false, Aevents)[0].name === 'Football Demi Finale 2/2 ');
  });
});
