const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
    it('should stub Utils.calculateNumber and verify console.log output', () => {
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        const consoleSpy = sinon.spy(console, 'log');

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnce).to.be.true;
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

        stub.restore();
        consoleSpy.restore();
    });
});
