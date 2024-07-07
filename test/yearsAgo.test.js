describe('yearsAgo', function() {
    it('should return the number of years ago from the current year', function() {
        const currentYear = new Date().getFullYear();
        assert.equal(yearsAgo(currentYear - 10), 10);
    });
});