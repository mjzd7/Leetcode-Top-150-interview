// Last updated: 29/04/2026, 06:06:30
// this one is done using brute force approach. i used two arrays, unique elements and frequency to note down highest frequency using the index of both arrays as reference
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    // 1. Sort the array (O(n log n))
7    // We use a copy [...nums] to avoid mutating the original input if needed
8    let nums1 = [...nums].sort((a, b) => a - b);
9    
10    // 2. Identify unique elements and store them in an array
11    let uniqueElements = [];
12    if (nums1.length > 0) {
13        uniqueElements.push(nums1[0]);
14        for (let i = 0; i < nums1.length - 1; i++) {
15            if (nums1[i] !== nums1[i + 1]) {
16                uniqueElements.push(nums1[i + 1]);
17            }
18        }
19    }
20    
21    let left = uniqueElements.length;
22
23    // 3. Mapping frequency[] for unique elements
24    let Frequency = new Array(left).fill(0);
25
26    for (let j = 0; j < left; j++) {
27        for (let k = 0; k < nums.length; k++) {
28            // Compare unique element with original array elements
29            if (uniqueElements[j] === nums[k]) {
30                Frequency[j]++;
31            }
32        }
33    }
34
35    // 4. Finding the highest frequency
36    let x = Math.max(...Frequency);
37    let w = Frequency.indexOf(x);
38
39    // Return the actual element from uniqueElements, not the index 'w'
40    return uniqueElements[w]; 
41};