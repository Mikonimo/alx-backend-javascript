const request = require('request');
const { expect } = require('chai');
let server;

const BASE_URL = 'http://localhost:7865';

describe('Index page', () => {
    before((done) => {
        server = require('./api'); // Import the server
        done();
    });

    after(() => {
        server.close(); // Close the server to free up the port
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
