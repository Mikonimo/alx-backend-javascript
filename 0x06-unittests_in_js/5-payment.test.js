const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up the spy for console.log before each test
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the spy after each test
        consoleSpy.restore();
    });

    it('should log "The total is: 120" and call console once when called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    });

    it('should log "The total is: 20" and call console once when called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10);

        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
    });
});
