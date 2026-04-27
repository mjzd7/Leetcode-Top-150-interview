// Last updated: 28/04/2026, 02:33:33
// Two pointer solution. We need to ensure left stores the unique elements and right finds the unique element and adds it to left +1  index. and the loop continues until it scans array.length -1 elements.
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var removeDuplicates = function(nums) {
6 let left = 1;
7 for (let right =0 ; right<nums.length-1; right++){
8    if( nums[right]!== nums[right+1] ){
9        nums[left] = nums[right+1];
10        left++; 
11    }
12 }
13 return left;
14};