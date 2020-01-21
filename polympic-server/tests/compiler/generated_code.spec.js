/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable no-undefined */
const cp = require('child_process');
const { Event, Preference } = require('../../models');
const assert = require('chai').assert;

describe('Generate code test', () => {
  let events;
  const javar = 'java -jar ./app/utils/compiler/polympic-dsl.jar ';

  beforeEach(() => {
    events = Event.get();
  });

  describe('test return values', () => {
    it('should return no events', () => {
      const compiledScript = cp.execSync(javar + '"./tests/compiler/samples/do_nothing.script"').toLocaleString();
      const lib = require('../compiler/../../app/utils/compiler/lib');
      const res = eval(compiledScript).run(events, Preference.get());
      assert.empty(res);
    });
    it('should return all events', () => {
      const compiledScript = cp.execSync(javar + '"./tests/compiler/samples/keep_all.script"').toLocaleString();
      const lib = require('../compiler/../../app/utils/compiler/lib');
      const res = eval(compiledScript).run(events, Preference.get());
      assert.equal(res.lenght, events.lenght);
    });
  });
});
