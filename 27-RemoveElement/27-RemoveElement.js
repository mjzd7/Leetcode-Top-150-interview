// Last updated: 28/04/2026, 02:34:17
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left= 0 ; 
    for (let right=0; right<nums.length; right++){
        if (nums[right] !== val){
            nums[left]= nums[right];
            left++
        }


    }
    return left;
};
