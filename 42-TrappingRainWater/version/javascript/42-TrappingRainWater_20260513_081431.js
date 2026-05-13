// Last updated: 13/05/2026, 08:14:31
// take left pass to find max of elements to the left and store in an array, right pass to find the elements to the right and then store in an array, then subtract the minimum of both from the height to find the area array. sum it up and return the sum
1/**
2 * @param {number[]} height
3 * @return {number}
4 */
5var trap = function (height) {
6    let l = height.length;
7    let left = new Array(l).fill(0);
8    left[0] = height[0];
9
10    let right = new Array(l);
11    right[l - 1] = height[l - 1];
12    let area = new Array(l).fill(0);
13     let sum =0;
14    for (i = 1; i < l; i++) {
15        left[i] += Math.max(height[i], left[i - 1]);
16    }
17    for (i = l - 2; i >= 0; i--) {
18        right[i] = Math.max(height[i], right[i + 1])
19    }
20    for (i = 0; i < l; i++) {
21        area[i] = (Math.min(left[i], right[i]) - height[i]);
22    }
23    for(i=0;i<l;i++){
24       
25        sum += area[i];
26    }
27  
28
29
30    return sum;
31};