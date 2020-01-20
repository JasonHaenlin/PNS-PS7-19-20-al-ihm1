/* eslint-disable no-undefined */
const cp = require('child_process');
require('../app/bin/www');
const {Event} = require('../models/');
const assert = require('chai').assert;

describe('Generate code test', () => {

    let events;
    let expectedEvents;

    beforeEach(() => {
        events = Event.get();
    });

    describe('test return values', () => {
        it('should return all events', () => {
            expectedEvents;
            const compiledScript = cp.execSync("java -jar C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-server/app/utils/compiler/polympic-dsl.jar \"C:/Users/user/Documents/Polytech_2019_2020/PS7/polympic-server/tests/do_nothing.script\"").toLocaleString();
            const lib = require('../app/utils/compiler/lib');
            assert.equal(eval(compiledScript).run(events), expectedEvents);
        });
    });
});
