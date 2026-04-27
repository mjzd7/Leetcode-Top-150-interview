// Last updated: 28/04/2026, 02:34:14
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 let left = 1;
 for (let right =0 ; right<nums.length-1; right++){
    if( nums[right]!== nums[right+1] ){
        nums[left] = nums[right+1];
        left++; 
    }
 }
 return left;
};