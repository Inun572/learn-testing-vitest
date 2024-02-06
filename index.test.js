import { it, expect, describe } from 'vitest';
import { fetchDataPromise, sumTotal } from './index.js';

describe('sumTotal', () => {
  it('should sum total', () => {
    // Arrange
    const numbers = [1, 2, 3];
    //   const expected = 6;

    const expected = numbers.reduce(
      (acc, curr) => acc + curr
    );

    // Act
    const result = sumTotal(numbers);

    // Assert
    expect(result).toBe(expected);
  });

  it('should yield Nan if at least one invalid number provided', () => {
    const oneIsString = ['invalid', 2];
    const oneIsUndefined = [1, undefined, 3];
    const oneIsObject = [{ value: 1 }, 2];

    expect(sumTotal(oneIsString)).toEqual('invalid input');
    expect(sumTotal(oneIsUndefined)).toEqual(
      'invalid input'
    );
    expect(sumTotal(oneIsObject)).toEqual('invalid input');
  });

  it('should yield 0 if no numbers are provided', () => {
    expect(sumTotal([])).toBe(0);
  });

  it('should yield the same result if any string of numbers are provided', () => {
    const numbers = ['1', '2', 3];
    expect(sumTotal(numbers)).toBe(6);
  });
});

describe('fetching data', () => {
  it('should load data', async () => {
    const data = await fetchDataPromise();

    expect(data).toBe('some data');
  });
});
