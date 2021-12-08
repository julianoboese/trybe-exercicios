const { describe, it, expect } = require('@jest/globals');

// Exercício 2
const myRemove = require('./myRemove');

describe('Testing myRemove function', () => {
  it('Test if myRemove([1, 2, 3, 4], 3) returns [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Test if myRemove([1, 2, 3, 4], 3) does not return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Test if myRemove([1, 2, 3, 4], 5) returns [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
