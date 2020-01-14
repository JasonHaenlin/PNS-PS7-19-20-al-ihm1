const { app } = require('../../bin/www');
const request = require('supertest');
const assert = require('assert');


describe('status route', () => {
  describe('GET /events', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/events')
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
  describe('GET /events filtered with Football', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/events?prefs=Football')
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
  describe('GET /events filtered with Football and Rugby', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/events?prefs=Football,Rugby')
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
  describe('GET /events filtered with Volleyball', () => {
    it('should respond with a 200', () => {
      request(app)
        .get('/events?prefs=Volleyball')
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
