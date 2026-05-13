// Last updated: 13/05/2026, 10:15:39
// So this code runs on two pointers having four Variables. We start left pointer from the left hand, right pointer from the right hand and as we encounter new values, we keep updating. left max and right max respectively and whichever value is lower we iterate from that side till the time Left is lower than right, we keep iterating. As soon as this condition is met, we return the area And area is calculated basically in the left half by subtracting the height at particular index minus the left max, vice versa actually area is calculated by left max minus height at index left or in the else condition if we find a new peak we update it Like if height at rate is greater than already having rate max, we update the rate max and after that We calculate area by having write max minus height of right and basically moving the words till they converge to a single point and then return the area
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var trap = function (height) {
6    let left = 0;
7    let right = height.length - 1;
8    let leftMax = 0;
9    let rightMax = 0;
10    let area = 0;
11
12    while (left < right) {
13        if (height[left] < height[right]) {
14            //update leftMax as we found a new peak
15            if (height[left] >= leftMax) {
16                leftMax = height[left];
17            }
18            else {
19                // trap water based on leftMax
20                area += leftMax - height[left];
21            }
22            left++;
23        } // move inwards
24        else {
25            //update rightMax if found a new peak;
26            if (height[right] >= rightMax) {
27                rightMax = height[right];
28            }
29            else {
30                // trap water based on rightMax
31                area += rightMax - height[right];
32            }
33            right--;
34        }
35        
36    }
37    return area;
38};