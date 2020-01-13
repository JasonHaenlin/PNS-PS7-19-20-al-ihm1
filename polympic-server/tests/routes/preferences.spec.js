const { app } = require('../../bin/www');
const request = require('supertest');
const assert = require('assert');


describe('status route', () => {
  describe('GET /preferences', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/preferences')
        .expect('content-type', /json/)
        .expect(200)
        .expect('Content-Length', '1119')
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
        .expect('Content-Length', '1004')
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
        .get('/preferences?select=sport,détente')
        .expect('content-type', /json/)
        .expect(200)
        .expect('Content-Length', '1119')
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
