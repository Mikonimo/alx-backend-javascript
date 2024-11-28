const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 when doing a SUM operation of 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });
    });

    describe('SUBTRACT', function () {
        it('returns -4 when doing SUBTRACT operation of 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });
    });

    describe('DIVIDE', function () {
        it('returns 0.2 when doing a DIVIDE operation of 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('returns an Error when a number is divided by 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    describe('Invalid operation type', function () {
        it('should throw and error for an uknown operation', function () {
            assert.throws(() => calculateNumber('MULTIPLY', 1.4, 4.5), Error);
        });
    });
});
