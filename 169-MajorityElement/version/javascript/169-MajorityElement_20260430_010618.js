// Last updated: 30/04/2026, 01:06:18
// Basic logic is since it has value already greater than n/2 so whenever we will find middle of the array it will always be the largest element.
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    nums.sort((a,b)=> a-b);
7    return nums[Math.floor(nums.length/2)];
8};