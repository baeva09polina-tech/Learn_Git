


/**
 * Filters numbers greater than 5 and returns their sum.
 *
 * @param {number[]} nums - Numbers to filter and sum.
 * @returns {number} The sum of the numbers greater than 5.
 */
function doStuff(nums) {
    /**
     * Returns only the numbers that satisfy the predicate `y`.
     * @param {number[]} arr - Numbers to filter.
     * @returns {number[]} The filtered numbers.
     */
  function x(arr) {
      let res = [];
      for (let n of arr) {
      if (y(n)) {
          res.push(n);
      }
      }
      return res;
  }
  
    /**
     * Determines whether a number is greater than 5.
     * @param {number} n - Number to test.
     * @returns {boolean} Whether the number is greater than 5.
     */
    function y(n) {
      return n > 5;
  }
  
    /**
     * Adds the numbers in an array.
     * @param {number[]} arr - Numbers to add.
     * @returns {number} The sum of the numbers.
     */
    function z(arr) {
          let total = 0;
          for (let val of) {
          total += val;
          }
          return total;
      }
  
  const a = x(nums);
  const b = z(a);
  return b;
  

}
    
  const numbers = [1, 2, 3, 6, 7, 8, 4, 5];


  const result = processAndSumNumbers(numbers);
      console.log(result); 
