const { Event } = require('../models/index');
// const Itinerary = require('../app/controller/itinerarybygraph');
const Itinerary = require('../app/controller/itinerary');
const assert = require('chai').assert;


const prefs = {
  sport: ['Football', 'Tennis'],
  handicap: ['Capacité à se déplacer:2'],
  recreation: ['Pause déjeuner'],
  country: ['France', 'Japon'],
  tourism: ['Sites touristiques']
};

const prefs_t = {
  sport: ['Football', 'Tennis'],
  handicap: ['Capacité à se déplacer:2'],
  recreation: ['Pause déjeuner'],
  country: ['France', 'Japon'],
  tourism: ['']
};

const prefs_d = {
  sport: ['Football', 'Tennis'],
  handicap: ['Capacité à se déplacer:2'],
  recreation: [''],
  country: ['France', 'Japon'],
  tourism: ['Sites touristiques']
};

const prefs_t_d = {
  sport: ['Football', 'Tennis'],
  handicap: ['Capacité à se déplacer:2'],
  recreation: [''],
  country: ['France', 'Japon'],
  tourism: ['']
};

/* global.access2 = 10;
global.meal = 18;
let iti = Itinerary.generateItinerary(prefs);
console.log(iti); */

describe('Obtenir un itinéraire', () => {
  let iti_t_d;
  let iti_d;
  let iti_t;
  it('Génération d un itinéraire simple', async () => {
    iti_t_d = Itinerary.generateItinerary(prefs_t_d);
    assert.isTrue(iti_t_d.length > 0);
  });

  it('Génération d un itinéraire avec tourisme', async () => {
    iti_d = Itinerary.generateItinerary(prefs_d);
    assert.isTrue(iti_d.length > iti_t_d.length);
  });

  it('Génération d un itinéraire avec déjeuner', async () => {
    iti_t = Itinerary.generateItinerary(prefs_t);
    assert.isTrue(iti_t.length >= iti_t_d.length);
  });
});


