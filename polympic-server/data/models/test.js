const BaseModel = require('./base-model.js');

module.exports = new BaseModel('test', t => {
    t.integer('test_id').unique();
    t.string('test', 50);
},
    [
        {
            test_id: 0, test: 'testing!',
        }
    ]
);
