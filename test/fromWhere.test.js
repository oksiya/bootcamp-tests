describe('fromWhere', function() {
    it('should return the town the car is from based on the registration number', function() {
        assert.equal(fromWhere('CY 123'), 'Bellville');
        assert.equal(fromWhere('CJ 123'), 'Paarl');
        assert.equal(fromWhere('CA 123'), 'Cape Town');
        assert.equal(fromWhere('ZN 123'), 'Some other place!');
    });
});