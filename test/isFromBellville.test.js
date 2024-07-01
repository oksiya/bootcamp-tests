const assert = require('chai').assert;
const isFromBellville = require('../functions/isFromBellville');

describe('isFromBellville', function() {
    it('should return true if registration number is from Bellville', function() {
        assert.isTrue(isFromBellville('CY 123'));
    });
    it('should return false if registration number is not from Bellville', function() {
        assert.isFalse(isFromBellville('CJ 123'));
    });
});
