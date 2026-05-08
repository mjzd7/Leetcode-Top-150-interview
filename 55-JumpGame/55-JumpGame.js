// Last updated: 09/05/2026, 03:08:18
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
let target = nums.length-1;
for(let i=nums.length-1;i>=0; i--){
    if(i+nums[i]>=target){
        target=i;
    }
  
}
  return target===0;
};