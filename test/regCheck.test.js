describe('regCheck', function() {
    it('should return true if registration number ends with specified location indicator', function() {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should return false if registration number does not end with specified location indicator', function() {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });
});