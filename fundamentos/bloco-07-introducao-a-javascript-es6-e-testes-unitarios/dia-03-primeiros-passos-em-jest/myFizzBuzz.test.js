const { describe, it, expect } = require('@jest/globals');

// Exercício 3
const myFizzBuzz = require('./myFizzBuzz');

describe('Testing myFizzBuzz function', () => {
  it('Test if myFizzBuzz(15) returns "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Test if myFizzBuzz(9) returns "fizz"', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Test if myFizzBuzz(10) returns "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('Test if myFizzBuzz(11) returns 11', () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  it('Test if myFizzBuzz("") returns false', () => {
    expect(myFizzBuzz('')).toBe(false);
  });
});
