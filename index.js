/**
 * Calculates the total sum of the given numbers array.
 *
 * @param {Array} numbers - An array of numbers to be summed
 * @return {number|string} The total sum of the numbers, or 'invalid input' if any element is not a number
 */

export const sumTotal = (numbers) => {
  let sum = 0;

  for (const num of numbers) {
    if (isNaN(Number(num))) {
      return 'invalid input';
    }
    sum += Number(num);
  }
  return sum;
};

export const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('some data');
    }, 1000);
  });
};
