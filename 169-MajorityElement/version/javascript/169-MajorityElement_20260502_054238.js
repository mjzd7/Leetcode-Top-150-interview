// Last updated: 02/05/2026, 05:42:38
// Joshi's idea here we assume that optimistically first element is our majority element, so we start checking if length is n/2-1 as n- n/2+1.
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function (nums) {
6    let currVal = nums[0];
7    let freq = 1;
8    for (let i = 1; i < nums.length; i++) {
9        if (nums[i] === currVal) {
10            freq++;
11        }
12        else if (freq <= 0) {
13            freq = 1;
14            currVal = nums[i];
15        }
16        else {
17            freq--;
18        }
19    }
20    return currVal;
21};