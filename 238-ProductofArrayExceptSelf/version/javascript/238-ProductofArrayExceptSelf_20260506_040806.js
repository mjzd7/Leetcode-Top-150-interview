// Last updated: 06/05/2026, 04:08:06
// it uses product of numbers left to the index i and product of numbers right to the index i stored in two different arrays. we can store left directly in the answer array and multiply it by right to modify the answer array.
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    let answer = new Array(nums.length).fill(1) 
7    let productRight = new Array(nums.length).fill(1)
8    for (let i=1;i<nums.length;i++){
9        answer[i]=  nums[i-1]*answer[i-1];
10    }
11    for(let j=nums.length-2; j>=0; j--){
12        productRight[j]=productRight[j+1]*nums[j+1];
13    }
14    for (let i=0;i<nums.length;i++){
15    answer[i]=productRight[i]*answer[i]}
16    return answer
17
18
19};