const assert = require('chai').assert;
const regCheck = require('../functions/regCheck');

describe('regCheck', function() {
    it('should return true if registration number ends with location', function() {
        assert.isTrue(regCheck('123 GP', 'GP'));
    });
    it('should return false if registration number does not end with location', function() {
        assert.isFalse(regCheck('123 EC', 'GP'));
    });
});
