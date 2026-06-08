// Last updated: 09/06/2026, 01:01:36
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        // 1. Save the original heights
        let hLeft = height[left];
        let hRight = height[right];
        
        // 2. Calculate the area
        let currArea = Math.min(hLeft, hRight) * (right - left);
        maxArea = Math.max(currArea, maxArea);
        
        // 3. Move the pointers, comparing against the saved original heights
        if (hLeft < hRight) {
            // Because height[left] is equal to hLeft on the first check, 
            // it guarantees left++ executes at least once.
            while (left < right && height[left] <= hLeft) {
                left++;
            }
        } else {
            // Same logic for the right side
            while (left < right && height[right] <= hRight) {
                right--;
            }
        }
    }
    
    return maxArea;

};