const Model = require('./config');

class Test extends Model {
    static get tableName() {
        return 'test';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['test_id', 'test'],
            properties: {
                test_id: { type: 'integer' },
                test: { type: 'string', minLength: 2, maxLength: 50 }
            }
        };
    }
}

module.exports = Test;
