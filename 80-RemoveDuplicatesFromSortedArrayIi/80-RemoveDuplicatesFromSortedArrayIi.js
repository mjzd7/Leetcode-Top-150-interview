// Last updated: 29/04/2026, 03:31:52
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 2; 
    if (nums.length<3) return nums.length
    for(let i= 2; i<nums.length; i++){
        if ( nums[i]!= nums[index-2]){
            nums[index] = nums[i];
            index++;
        }
        
    }

    return index;
};