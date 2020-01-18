const { app } = require('../../bin/www');
const request = require('supertest');


describe('status route', () => {
  describe('GET /', () => {
    it('should respond with a 200', async () => {
      request(app)
        .get('/')
        .expect(200)
        .end((err) => {
          if (err) {
            throw err;
          }
        });
    });
  });
});
