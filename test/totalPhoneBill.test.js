describe('totalPhoneBill', function() {
    it('should return the total bill for the data provided', function() {
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
    });
});