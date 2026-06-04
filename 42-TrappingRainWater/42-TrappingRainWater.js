// Last updated: 04/06/2026, 15:53:50
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let area = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            //update leftMax as we found a new peak
            if (height[left] >= leftMax) {
                leftMax = height[left];
            }
            else {
                // trap water based on leftMax
                area += leftMax - height[left];
            }
            left++;
        } // move inwards
        else {
            //update rightMax if found a new peak;
            if (height[right] >= rightMax) {
                rightMax = height[right];
            }
            else {
                // trap water based on rightMax
                area += rightMax - height[right];
            }
            right--;
        }
        
    }
    return area;
};