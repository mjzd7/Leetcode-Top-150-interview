// Last updated: 09/06/2026, 01:01:34
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let triplets = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        let target = -nums[i];
        if (target < 0) continue;
        while (left < right) {
            currSum = nums[left] + nums[right];

            if (target === currSum) {
                //logic for storing element in the triplets array 
                triplets.push([nums[i], nums[left], nums[right]]);
              

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                  left++;
                right--;
            }
            else if (currSum < target) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return triplets;
}