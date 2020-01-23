/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:09:30 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:09:30 
 */


import {app} from '../index.js';
import Test from 'supertest';

describe('GET /', () => {
  let myapp = null;

  beforeEach(() => {
    myapp = app;
  });

  it('responds with text/html; charset=utf-8', (done) => {
    console.log(done);
    Test(myapp)
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });
});
