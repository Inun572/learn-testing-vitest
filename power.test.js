import { it, expect, describe } from 'vitest';
import { power } from './power';

describe('power', () => {
  it('should return the power of a number', () => {
    // Arrange
    const base = 2;
    const exponent = 3;
    const expected = 8;

    const result = power(base, exponent);

    expect(result).toBe(expected);
  });

  it('should return number of power of 2 if exponent is 0 or not provided', () => {
    const base = 2;
    const expected = 4;

    const result = power(base);

    expect(result).toBe(expected);
  });

  it('should return error if parameter base is not a number', () => {
    const base = 'invalid';
    const exponent = 3;
    expect(power(base, exponent)).toBe(
      `base must be a number`
    );
  });

  it('should return error if parameter exponent is not a number', () => {
    const base = 2;
    const exponent = 'invalid';
    expect(power(base, exponent)).toBe(
      `exponent must be a number`
    );
  });
});
