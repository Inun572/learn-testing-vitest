/**
 * Calculates the power of a base number raised to a given exponent.
 *
 * @param {number} base - the base number
 * @param {number} exponent - the exponent
 * @return {number} the result of the base raised to the exponent
 */

export const power = (base, exponent = 2) => {
  if (isNaN(Number(base))) {
    return 'base must be a number';
  }

  if (isNaN(Number(exponent))) {
    return 'exponent must be a number';
  }

  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};
