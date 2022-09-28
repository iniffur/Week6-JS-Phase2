const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('Returns array of all candies beginning with "Ma"', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });

    it('Returns only Mars with max price of 2"', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });

    it('Returns array of all candies beginning with "S"', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });

    it('Returns array of all candies beginning with "S" less than 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
});
