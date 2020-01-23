/*
 * @Author: rach@rach.colley 
 * @Date: 2020-01-23 17:09:37 
 * @Last Modified by:   rach@rach.colley 
 * @Last Modified time: 2020-01-23 17:09:37 
 */


import {app} from '../index.js';
import Test from 'supertest';
import Cheerio from 'cheerio';

describe('GET /pages/', () => {
  let myapp = null;

  beforeEach(() => {
    myapp = app;
  });

  it('responds with 404', (done) => {
    Test(myapp)
      .get('/pages/')
      .expect(404, done);
  });

  it('responds with text/html; charset=utf-8', (done) => {
    Test(myapp)
      .get('/pages/aboutus')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });

  it('document title is About us', (done) => {
    Test(myapp)
      .get('/pages/aboutus')
      .expect((res) => {
        const htmlResponse = res.text;
        const chata = Cheerio.load(htmlResponse);
        const actual = chata('title').text();
        const expected = 'About us';
        if (actual != expected) {
          throw new Error(expected, (actual) => {
            `Expected ${expected} but got ${actual}!`;
          });
        }
      }).end(done);
  });

  it('responds with text/html; charset=utf-8', (done) => {
    Test(myapp)
      .get('/pages/contactus')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });

  it('document title is Contact us', (done) => {
    Test(myapp)
      .get('/pages/contactus')
      .expect((res) => {
        const htmlResponse = res.text;
        const chata = Cheerio.load(htmlResponse);
        const actual = chata('title').text();
        const expected = 'Contact us';
        if (actual != expected) {
          throw new Error(expected, (actual) => {
            `Expected ${expected} but got ${actual}!`;
          });
        }
      }).end(done);
  });

  it('responds with text/html; charset=utf-8', (done) => {
    Test(myapp)
      .get('/pages/contactus-response')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });

  it('document title is Contact us response', (done) => {
    Test(myapp)
      .get('/pages/contactus-response')
      .expect((res) => {
        const htmlResponse = res.text;
        const chata = Cheerio.load(htmlResponse);
        const actual = chata('title').text();
        const expected = 'Contact us response';
        if (actual != expected) {
          throw new Error(expected, (actual) => {
            `Expected ${expected} but got ${actual}!`;
          });
        }
      }).end(done);
  });

  it('responds with text/html; charset=utf-8', (done) => {
    Test(myapp)
      .get('/pages/planyourtrip')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });

  it('document title is Plan your trip', (done) => {
    Test(myapp)
      .get('/pages/planyourtrip')
      .expect((res) => {
        const htmlResponse = res.text;
        const chata = Cheerio.load(htmlResponse);
        const actual = chata('title').text();
        const expected = 'Plan your trip';
        if (actual != expected) {
          throw new Error(expected, (actual) => {
            `Expected ${expected} but got ${actual}!`;
          });
        }
      }).end(done);
  });
});
