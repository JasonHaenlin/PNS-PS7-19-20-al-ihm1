const { app } = require('../../app/bin/www');
const request = require('supertest');
const assert = require('assert');
const _ = require('lodash');


describe('status route', () => {
  describe('GET /preferences', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/preferences')
        .expect('content-type', /json/)
        .expect(200)
        .expect((res) => {
          assert.notEqual(res.body, null);
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
  describe('GET /preferences filtered with sports', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/preferences?select=sport')
        .expect('content-type', /json/)
        .expect(200)
        .expect((res) => {
          assert.notEqual(res.body, null);
          const c = _.filter(res.body, (e) => e.tag !== 'sport');
          assert.equal(c.length, 0);
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
  describe('GET /preferences filtered with sports', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/preferences?select=sport,détente')
        .expect('content-type', /json/)
        .expect(200)
        .expect((res) => {
          assert.notEqual(res.body, null);
          const c = _.filter(res.body, (e) => e.tag !== 'sport' && e.tag !== 'détente');
          assert.equal(c.length, 0);
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
});
