const request = require('request');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:7865';

describe('Index page', () => {
    let server;

    before(() => {
        server = require('./api');
    });

    after(() => {
        server.close();
    });

    it('should return status code 200', (done) => {
        request.get(`${BASE_URL}/`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it('should return "Welcome to the payment system"', (done) => {
        request.get(`${BASE_URL}/`, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', () => {
    it('should return status code 200 when :id is a number', (done) => {
        request.get(`${BASE_URL}/cart/12`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 12');
            done();
        });
    });

    it('should return status code 404 when :id is not a number', (done) => {
        request.get(`${BASE_URL}/cart/hello`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });
});
