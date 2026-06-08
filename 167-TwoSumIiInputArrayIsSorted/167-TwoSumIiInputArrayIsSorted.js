// Last updated: 09/06/2026, 01:01:24
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let currSum;
    while (left < right) {

        currSum = numbers[left] + numbers[right];
        if (currSum === target) {
            return [left + 1, right + 1]
        }
        else if (currSum < target) {
            left++;
            while (left < right && numbers[left] === numbers[left - 1]) {
                left++;
            }
        }
        else {
            right--;
            while (left < right && numbers[right] === numbers[right + 1]) {
                right--;
            }
        }
    }
};