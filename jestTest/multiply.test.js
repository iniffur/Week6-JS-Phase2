const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 3 by 4', () => {
        expect(multiply(3, 4)).toBe(12);
    });
});