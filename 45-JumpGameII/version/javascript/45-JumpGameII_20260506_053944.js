// Last updated: 06/05/2026, 05:39:44
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var jump = function(nums) {
6   let totalJumps=0;
7   let coverage = 0;
8   let destination= nums.length-1; 
9   let lastJumpIndex=0;
10
11   //Base Case
12   if (nums.length===1)return 0;
13
14   for (let i =0 ; i<nums.length-1;i++){
15    coverage = Math.max(coverage,i+nums[i]);
16
17    if (i===lastJumpIndex){
18      
19        lastJumpIndex = coverage;
20          totalJumps++;
21    }
22    if(lastJumpIndex>destination){
23        return totalJumps;
24    }
25   } 
26   return totalJumps;
27};