// Last updated: 05/05/2026, 10:45:25
1/**
2 * @param {number[]} nums
3 * @return {boolean}
4 */
5var canJump = function(nums) {
6let target = nums.length-1;
7for(let i=nums.length-1;i>=0; i--){
8    if(i+nums[i]>=target){
9        target=i;
10    }
11  
12}
13  return target===0;
14};