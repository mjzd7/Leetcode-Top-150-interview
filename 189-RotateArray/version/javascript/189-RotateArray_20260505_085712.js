// Last updated: 05/05/2026, 08:57:12
// This solution has space. complexity of O(n) but and time complexity of O(n)
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {void} Do not return anything, modify nums in-place instead.
5 */
6var rotate = function(nums, k) {
7let n = nums.length;
8let arr = [...nums]
9for(i=0;i<nums.length;i++){
10    nums[(i+k)%n]= arr[i]
11}
12};