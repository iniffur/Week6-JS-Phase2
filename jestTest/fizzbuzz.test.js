const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns "Fizzbuzz" when divisible by 5 & 3', () => {
        expect(fizzBuzz(15)).toBe('Fizzbuzz');
    });

    it('returns "Fizz" when divisible by 3 but not 5', () => {
        expect(fizzBuzz(12)).toBe('Fizz');
    });

    it('returns "Buzz" when divisible by 5 but not3', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    });
});
