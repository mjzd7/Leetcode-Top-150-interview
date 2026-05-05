// Last updated: 05/05/2026, 12:21:58
/*
 * Greedy approach, choose the farthest I can go from my options and update the coverage maximum of coverage or i+nums[i]. 
 * If I is equal to last jump index, make last jumpindex = coverage. increment total jumps. and then check if destination reached or not. if yes return total Jumps. if no reiterate . once loop finishes return totaljumps
*/

1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var jump = function (nums) {
6    let totalJumps = 0;
7    let lastJumpIndex = 0;
8    let destination = nums.length - 1;
9    let coverage = 0;
10
11    //Base case 
12    if (nums.length == 1) return 0;
13
14    //Greedy stratergy, extend coverage as much as possible.
15    for (let i = 0; i < nums.length; i++) {
16        coverage = Math.max(coverage, i + nums[i]);
17
18        if (i === lastJumpIndex) {
19            lastJumpIndex = coverage;
20            totalJumps++;
21            //check reached destination or not.
22            if (coverage >= destination) {
23                return totalJumps;
24            }
25        }
26    }
27    return totalJumps;
28};