import { app } from '../index.js';
import Test from 'supertest';

describe('GET /', () => {

    let myapp;

    beforeEach(() => {
        myapp = app;
    });
    afterEach(() => {
        // TODO: Close via req, res, listen...
    });
    it('responds with text/html; charset=UTF-8', (done) => {
        Test(myapp)
            .get('/')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200, done);
    });
});
