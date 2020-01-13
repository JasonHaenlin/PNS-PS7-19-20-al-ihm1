require('../bin/www');
let assert = require('chai').assert;
const { event } = require('../controller');

Sevent =
{
  "id": "fdm2",
  "name": "Football Demi Finale 1/2 ",
  "description": "La demi finale présentant le match tant attendu Italie vs Espagne, lequel des deux ira en final ? !",
  "versus": ["Italie","Espagne"],
  "sport": "Football",
  "site": {
      "name" :"Stade de France A",
      "latitude" :48.924459,
      "longitude" :2.360164
  },
  "startTime": 1667721600,
  "endTime": 1667725200
}

Aevents = [
  {
    "id": "fdm1",
    "name": "Football Demi Finale 1/2 ",
    "description": "La demi finale présentant le match tant attendu Italie vs Espagne, lequel des deux ira en final ? !",
    "versus": ["Italie","Espagne"],
    "sport": "Football",
    "site": {
        "name" :"Stade de France A",
        "latitude" :48.922456,
        "longitude" :2.361977
    },
    "startTime": 1667721600,
    "endTime": 1667725200
},
{
    "id": "fdm2",
    "name": "Football Demi Finale 2/2 ",
    "description": "La demi finale présentant le match tant attendu France vs Allemagne, lequel des deux ira en final ? !",
    "versus": ["France","Allemagne"],
    "sport": "Football",
    "site": {
        "name" :"Stade de France B",
        "latitude" :48.922456,
        "longitude" :2.365555
    },
    "startTime": 1667728800,
    "endTime": 1667736000
},
{
  "id": "fdm3",
  "name": "Football Demi Finale 2/2 ",
  "description": "La demi finale présentant le match tant attendu France vs Allemagne, lequel des deux ira en final ? !",
  "versus": ["France","Allemagne"],
  "sport": "Handball",
  "site": {
      "name" :"Stade de France B",
      "latitude" :58.924459,
      "longitude" :2.360164
  },
  "startTime": 1667736000,
  "endTime": 1667736000
}]
// events = event.getEvents();
// eventz = event.getEventById("fdm4");
// console.log(eventz);
// console.log(event.getNext(Sevent, events));
// console.log(event.getEarliestEvent(events));
// events = evenement.getEvenement();

coord1 = {latitude: 48.922456, longitude: 2.361977};
describe('Liste donnant la distance entre lutilisateur et un/des événements', () => {
  it('Distance entre deux points identiques', async () => {
    assert.isTrue(event.getDistanceEvent(coord1, Aevents)[0].distance === 0);
  });
  it('Distance entre deux points différents', async () => {
    assert.isTrue(event.getDistanceEvent(coord1, Aevents)[1].distance > 0);
  });
  it('Distance entre deux points très éloignés', async () => {
    assert.isTrue(event.getDistanceEvent(coord1, Aevents)[2].distance > 1000);
  });
});

describe('Liste contenant uniquement certains sports', () => {
  it('Taille dune liste devenements avec du foot, du hand, et de la pétanque', async () => {
    assert.lengthOf(event.getSpecificEvent(['Football', 'Handball', 'Pétanque']), 7);
  });
  it('Taille dune liste devenements avec du foot et du hand', async () => {
    assert.lengthOf(event.getSpecificEvent(['Football', 'Handball']), 6);
  });
  it('Taille dune liste devenements avec du foot', async () => {
    assert.lengthOf(event.getSpecificEvent(['Football']), 2);
    assert.isTrue(event.getSpecificEvent(['Football'])[0].sport === 'Football');
  });
  it('Taille dune liste devenements avec de la pétanque', async () => {
    assert.lengthOf(event.getSpecificEvent(['Pétanque']), 1);
    assert.isTrue(event.getSpecificEvent(['Pétanque'])[0].sport === 'Pétanque');
  });
  it('Taille dune liste devenements avec du hand', async () => {
    assert.lengthOf(event.getSpecificEvent(['Handball']), 4);
    assert.isTrue(event.getSpecificEvent(['Handball'])[0].sport === 'Handball');
  });
});


describe('Liste triée par un critère', () => {
  it('Liste triée par rapport a lheure de départ décroissant', async () => {
    assert.isTrue(event.getSortedEvent('startTime', false)[0].name === 'Pétanque Finale 1');
  });
  it('Liste triée par rapport au nom décroissant', async () => {
    assert.isTrue(event.getSortedEvent('name', false)[0].name === 'Volley Finale 1/1 ');
  });
});
