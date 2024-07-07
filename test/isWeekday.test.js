describe('isWeekday', function() {
    it('should return true if the day is a weekday', function() {
        assert.equal(isWeekday('Monday'), true);
    });

    it('should return false if the day is not a weekday', function() {
        assert.equal(isWeekday('Saturday'), false);
    });
});