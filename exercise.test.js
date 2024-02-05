import {
  transformToNumber,
  validateNumber,
  validateStringNotEmpty,
} from './exercise';
import { it, expect, describe } from 'vitest';

describe('transformToNumber', () => {
  it('should transform string to number', () => {
    const value = '10';
    const result = transformToNumber(value);
    expect(result).toBe(10);
  });

  it('should return 0 or 1 if value is boolean', () => {
    const isTrue = true;
    const isFalse = false;
    expect(transformToNumber(isTrue)).toBe(1);
    expect(transformToNumber(isFalse)).toBe(0);
  });

  it('should return NaN if value is not a string of number', () => {
    const value = 'invalid';
    const result = transformToNumber(value);
    expect(result).toBeNaN();
  });
});

describe('validateStringNotEmpty', () => {
  it('should throw error if value is empty', () => {
    const value = '';
    expect(() =>
      validateStringNotEmpty(value)
    ).toThrowError('Invalid input - must not be empty.');
  });

  it('should return true if value is not empty', () => {
    const value = 'test';
    expect(validateStringNotEmpty(value)).toBeTruthy();
  });
});

describe('validateNumber', () => {
  it('should throw error if value is not a number', () => {
    const value = 'invalid';
    expect(() => validateNumber(value)).toThrowError(
      'Invalid number input.'
    );
  });

  it('should return true if value is a number', () => {
    const value = 1;
    expect(validateNumber(value)).toBeTruthy();
  });
});
