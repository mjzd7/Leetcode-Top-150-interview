// Last updated: 09/05/2026, 03:08:09
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1) 
    let productRight = new Array(nums.length).fill(1)
    for (let i=1;i<nums.length;i++){
        answer[i]=  nums[i-1]*answer[i-1];
    }
    for(let j=nums.length-2; j>=0; j--){
        productRight[j]=productRight[j+1]*nums[j+1];
    }
    for (let i=0;i<nums.length;i++){
    answer[i]=productRight[i]*answer[i]}
    return answer


};