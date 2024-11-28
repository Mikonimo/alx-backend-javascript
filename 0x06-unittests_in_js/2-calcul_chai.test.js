const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 when doing a SUM operation of 1.4 and 4.5', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', function () {
        it('returns -4 when doing SUBTRACT operation of 1.4 and 4.5', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE', function () {
        it('returns 0.2 when doing a DIVIDE operation of 1.4 and 4.5', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('returns an Error when a number is divided by 0', function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should throw and error for an uknown operation', function () {
            expect(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw(Error);
        });
    });
});
