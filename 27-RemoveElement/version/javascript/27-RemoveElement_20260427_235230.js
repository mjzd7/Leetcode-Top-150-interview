// Last updated: 27/04/2026, 23:52:30
1/**
2 * @param {number[]} nums
3 * @param {number} val
4 * @return {number}
5 */
6var removeElement = function(nums, val) {
7    let left= 0 ; 
8    for (let right=0; right<nums.length; right++){
9        if (nums[right] !== val){
10            nums[left]= nums[right];
11            left++
12        }
13
14
15    }
16    return left;
17};
18