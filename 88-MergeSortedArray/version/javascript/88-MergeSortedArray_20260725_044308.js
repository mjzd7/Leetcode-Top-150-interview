// Last updated: 25/07/2026, 04:43:08
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function (nums1, m, nums2, n) {
9    let upper = m - 1;
10    let lower = n - 1;
11    insertPos = m + n - 1;
12
13    while (upper >= 0 && lower >= 0) {
14        if (nums2[lower] > nums1[upper]) {
15            nums1[insertPos] = nums2[lower];
16            lower--;
17
18        }
19        else {
20            nums1[insertPos] = nums1[upper];
21            upper--;
22        }
23        insertPos--;
24    }
25    while (lower >= 0) {
26        nums1[insertPos] = nums2[lower];
27        lower--;
28        insertPos--;
29    }
30};