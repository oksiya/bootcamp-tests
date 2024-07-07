describe('findItemsOver20', function() {
    it('should return all items with quantity over 20', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3}
        ];
        const result = [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27}
        ];
        assert.deepEqual(findItemsOver20(items), result);
    });
});