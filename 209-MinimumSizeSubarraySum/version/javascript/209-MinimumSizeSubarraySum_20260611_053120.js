// Last updated: 11/06/2026, 05:31:20
// This solution uses sliding window approach. We increment we keep checking till the time rate is equal to num's length and in that we We have situational check that if current sum is less than target then we increment right and add the right element to current sum. Otherwise we update the result which is minimum of previous result and This result increment left, but before incrementing left we calculate current sum and later on return the result also, we ensure that we take a very high value of result, a bit bigger than our highest value, to pass all the test cases. We also need to ensure that in case instead of hard coding 10,000 years, we should rather use infinity
1/**
2 * @param {number} target
3 * @param {number[]} nums
4 * @return {number}
5 */
6var minSubArrayLen = function(target, nums) {
7   let left = 0; 
8   let right = 0; 
9   let result = 100001;
10   let currSum = nums[left];
11
12   while(right<nums.length){
13
14    if (currSum<target){
15    right++;
16    currSum+=nums[right];
17    }
18
19    else {
20        result = Math.min(result,(right-left+1));
21        left++;
22        currSum -=nums[left-1];
23    }
24    
25   }
26
27    if(result!==100001) return result;
28    else return 0;
29};