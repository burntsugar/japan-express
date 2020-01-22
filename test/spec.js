import { app } from '../index.js';
import Test from 'supertest';

describe('GET /', function () {

    let myapp;

    beforeEach(function () {
        myapp = app;
    });
    afterEach(function () {
        // TODO: Close via req, res, listen...
    });
    it('responds with text/html; charset=UTF-8', function (done) {
        Test(myapp)
            .get('/')
            .expect('Content-Type', 'text/html; charset=UTF-8')
            .expect(200, done);
    });
});
