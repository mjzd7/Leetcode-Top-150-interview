// Last updated: 06/05/2026, 04:04:23
1/**
2 * @param {number[]} nums
3 * @return {number[]}
4 */
5var productExceptSelf = function(nums) {
6    let productLeft = new Array(nums.length).fill(1) 
7    let productRight = new Array(nums.length).fill(1)
8    for (let i=1;i<nums.length;i++){
9        productLeft[i]=  nums[i-1]*productLeft[i-1];
10    }
11    for(let j=nums.length-2; j>=0; j--){
12        productRight[j]=productRight[j+1]*nums[j+1];
13    }
14    let answer =[...productLeft]
15    for (let i=0;i<nums.length;i++){
16    answer[i]=productRight[i]*productLeft[i]}
17    return answer
18
19
20};