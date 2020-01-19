const { app } = require('../../bin/www');
const request = require('supertest');
const assert = require('assert');
const _ = require('lodash');


describe('status route', () => {
  describe('GET /touristicsites', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/touristicsites')
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
  describe('GET /touristicsites with distance', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/touristicsites?select=10000')
        .expect('content-type', /json/)
        .expect(200)
        .expect((res) => {
          assert.notEqual(res.body[0], null);
        })
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
});
