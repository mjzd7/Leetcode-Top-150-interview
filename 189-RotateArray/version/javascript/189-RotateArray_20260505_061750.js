// Last updated: 05/05/2026, 06:17:50
// using modulus to makes k less than nums.length, slicing nums into an array for last k elements, then filling last k elements with i-k ones and lastly filling sliced array into nums
1/**
2 * @param {number[]} nums
3 * @param {number} k
4 * @return {void} Do not return anything, modify nums in-place instead.
5 */
6var rotate = function(nums, k) {
7   let m=k%nums.length;
8   let len=nums.length;
9   if(m===0){return nums}
10   let arr = nums.slice(len-m);
11   for(i=len-1; i>=m ; i--){
12    nums[i]= nums[i-m];
13   }
14   for(i=0;i<m;i++){
15    nums[i]= arr[i];
16   }
17};