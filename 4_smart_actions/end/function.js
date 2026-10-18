
/**
 * Processes an array of numbers by filtering and summing them.
 *
 * @param {number[]} nums - The array of numbers to process.
 * @returns {number} The sum of numbers greater than 5.
 */
function processNumbers(nums) {
    function filterNumbersGreaterThanFive(arr) {
        let filtered = [];
        for (let n of arr) {
            if (isGreaterThanFive(n)) {
                filtered.push(n);
            }
        }
        return filtered;
    }
    
    function isGreaterThanFive(n) {
        return n > 5;
    }
    
    function sumNumbers(arr) {
        let total = 0;
        for (let val of arr) {
            total += val;
        }
        return total;
    }
    
    const filteredNumbers = filterNumbersGreaterThanFive(nums);
    const sum = sumNumbers(filteredNumbers);
    return sum;
}
      
const numbers = [1, 2, 3, 6, 7, 8, 4, 5];

const result = processNumbers(numbers);
console.log(result); 
      
  