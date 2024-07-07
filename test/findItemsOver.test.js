describe('findItemsOver', function() {
    it('should return all items with quantity over the specified threshold', function() {
        const items = [
            {name: 'apples', qty: 10},
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27},
            {name: 'apples', qty: 3}
        ];
        const threshold = 20;
        const result = [
            {name: 'pears', qty: 37},
            {name: 'bananas', qty: 27}
        ];
        assert.deepEqual(findItemsOver(items, threshold), result);
    });
});