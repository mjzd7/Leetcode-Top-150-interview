// Last updated: 07/06/2026, 05:57:53
// In this solution, we made an adjustment to check if the next element found is a duplicate or not. so we check left with left -1 and right with right +1
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function (numbers, target) {
7    let left = 0;
8    let right = numbers.length - 1;
9    let currSum;
10    while (left < right) {
11
12        currSum = numbers[left] + numbers[right];
13        if (currSum === target) {
14            return [left + 1, right + 1]
15        }
16        else if (currSum < target) {
17            left++;
18            while (left < right && numbers[left] === numbers[left - 1]) {
19                left++;
20            }
21        }
22        else {
23            right--;
24            while (left < right && numbers[right] === numbers[right + 1]) {
25                right--;
26            }
27        }
28    }
29};