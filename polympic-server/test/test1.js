require('../bin/www');
const { Evenement } = require('../models');
console.log(Evenement.getSpecificEvenement(['Football', 'Handball']));
