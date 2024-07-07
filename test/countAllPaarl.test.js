describe('countAllPaarl', function() {
    it('should return the number of registration numbers from Paarl', function() {
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
});