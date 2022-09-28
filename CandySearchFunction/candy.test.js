const Candy = require('./candy');

describe('candy', () => {
    it('returns a candys name and price', () => {
        const Mars = new Candy('Mars', 2)
        expect(Mars.getName()).toBe('Mars');
        expect(Mars.getPrice()).toBe(2);
    });
});
