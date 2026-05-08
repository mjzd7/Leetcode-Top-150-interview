// Last updated: 09/05/2026, 03:08:08
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
let n = nums.length;
let arr = [...nums]
for(i=0;i<nums.length;i++){
    nums[(i+k)%n]= arr[i]
}
};