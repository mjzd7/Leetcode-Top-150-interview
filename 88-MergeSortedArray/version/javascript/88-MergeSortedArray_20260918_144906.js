// Last updated: 18/09/2026, 14:49:06
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9
10    let p1 = m-1;
11    let p2 = n-1;
12    let currentSlot = m+n-1;
13
14    while(p2>=0){
15        if(p1>=0 && nums1[p1]>nums2[p2]){
16            nums1[currentSlot]= nums1[p1--];   
17        }
18        else {
19            nums1[currentSlot]= nums2[p2--];
20        }
21        currentSlot--;
22    }
23};