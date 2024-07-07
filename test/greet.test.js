describe('greet', function() {
    it('should return greeting message with the provided name', function() {
        assert.equal(greet('John'), 'Hello, John');
    });
});