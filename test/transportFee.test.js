describe('transportFee', function() {
    it('should return the correct transport fee based on the shift', function() {
        assert.equal(transportFee('morning'), 'R20');
        assert.equal(transportFee('afternoon'), 'R10');
        assert.equal(transportFee('night'), 'free');
    });
});