// Last updated: 11/06/2026, 10:29:08
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
   let left = 0; 
   let result = Infinity;
   let currSum = 0;
    const len = nums.length;
   for(let right = 0;right<len;right++){
    currSum+= nums[right];
    
    while(currSum>=target){
        const currLen = right-left+1;
        if(result > currLen){
            result = currLen;
        }
        currSum-=nums[left++];
    }
    
   }

   return result ===Infinity ? 0 :result;
};