// Last updated: 09/05/2026, 03:08:12
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority= nums[0];
    let votes =1;
    for (let i =1; i<nums.length;i++){
        if(nums[i] === majority){
            votes++;
        }
        if(nums[i]!== majority){ 
            votes--; }
    if (votes === 0){ 
        majority=nums[i];
        votes=1;}
    }
    return majority;
};