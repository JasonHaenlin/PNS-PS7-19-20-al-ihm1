/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable no-undefined */
const cp = require('child_process');
const { Event } = require('../../models');
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
      const res = eval(compiledScript).run(events);

      assert.empty(res);
    });
    it('should return all events', () => {
      const compiledScript = cp.execSync(javar + '"./tests/compiler/samples/keep_all.script"').toLocaleString();
      const res = eval(compiledScript).run(events);

      assert.equal(res.lenght, events.lenght);
    });
  });
});
