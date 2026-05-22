// Last updated: 22/05/2026, 17:57:55
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9while (n>0){
10    if(m>0&&nums1[m-1]>nums2[n-1]){
11        nums1[m+n-1]=nums1[m-1];
12        m--
13    }
14    else{
15        nums1[m+n-1]= nums2[n-1];
16        n--;
17    }
18}
19};