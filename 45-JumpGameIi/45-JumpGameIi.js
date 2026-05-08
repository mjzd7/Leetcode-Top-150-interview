// Last updated: 09/05/2026, 03:08:20
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let totalJumps=0;
   let coverage = 0;
   let destination= nums.length-1; 
   let lastJumpIndex=0;

   //Base Case
   if (nums.length===1)return 0;

   for (let i =0 ; i<nums.length-1;i++){
    coverage = Math.max(coverage,i+nums[i]);

    if (i===lastJumpIndex){
      
        lastJumpIndex = coverage;
          totalJumps++;
    }
    if(lastJumpIndex>destination){
        return totalJumps;
    }
   } 
   return totalJumps;
};