const { app } = require('../../bin/www');
const request = require('supertest');
const assert = require('assert');
const _ = require('lodash');

describe('status route', () => {
  describe('GET /restaurant', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/restaurant')
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
  describe('GET /restaurant with distance', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/restaurant?select={latitude: 48.922456, longitude: 2.361977}')
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
});