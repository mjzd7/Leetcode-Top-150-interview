// Last updated: 07/06/2026, 08:13:51
// We start from both ends checking for area values at all interations and storing the maximum area value and comparing it with the current area value. if it is bigger, we update the area value, otherwise, we shift the loop to the next iteration.
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var maxArea = function (height) {
6    let left = 0;
7    let right = height.length - 1;
8    let CurrArea;
9    let maxArea = 0;
10    while (left < right) {
11        currArea = Math.min(height[left], height[right]) * (right - left);
12
13        maxArea = Math.max(currArea, maxArea);
14        if (height[left] < height[right]) {
15            left++;
16        }
17        else {
18            right--;
19        }
20
21    }
22    return maxArea;
23};