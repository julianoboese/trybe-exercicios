const { describe, it, expect } = require('@jest/globals');

// Exercício 1
const sum = require('./sum');

describe('Testing sum function', () => {
  it('Test if sum(4, 5) returns 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Test if sum (0, 0) returns 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Test if sum (4, "5") throws an error', () => {
    expect(() => { sum(4, '5'); }).toThrow();
  });

  it('Test if sum (4, "5") throws the error message: "parameters must be numbers"', () => {
    expect(() => { sum(4, '5'); }).toThrowError(new Error('parameters must be numbers'));
  });
});
