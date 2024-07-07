describe('countAllFromTown', function() {
    it('should return the number of registration numbers from a specific town', function() {
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'), 3);
    });
});