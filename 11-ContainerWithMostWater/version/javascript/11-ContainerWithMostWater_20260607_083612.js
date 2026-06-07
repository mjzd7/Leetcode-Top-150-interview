// Last updated: 07/06/2026, 08:36:12
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function (height) {
6    let left = 0;
7    let right = height.length - 1;
8    let maxArea = 0;
9
10    while (left < right) {
11        // 1. Save the original heights
12        let hLeft = height[left];
13        let hRight = height[right];
14        
15        // 2. Calculate the area
16        let currArea = Math.min(hLeft, hRight) * (right - left);
17        maxArea = Math.max(currArea, maxArea);
18        
19        // 3. Move the pointers, comparing against the saved original heights
20        if (hLeft < hRight) {
21            // Because height[left] is equal to hLeft on the first check, 
22            // it guarantees left++ executes at least once.
23            while (left < right && height[left] <= hLeft) {
24                left++;
25            }
26        } else {
27            // Same logic for the right side
28            while (left < right && height[right] <= hRight) {
29                right--;
30            }
31        }
32    }
33    
34    return maxArea;
35
36};