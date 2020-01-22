import {app} from '../index.js';
import Test from 'supertest';

describe('GET /', () => {
  let myapp = null;

  beforeEach(() => {
    myapp = app;
  });

  it('responds with text/html; charset=UTF-8', (done) => {
    Test(myapp)
      .get('/')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});