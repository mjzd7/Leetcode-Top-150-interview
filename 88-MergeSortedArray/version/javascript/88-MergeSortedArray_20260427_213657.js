// Last updated: 27/04/2026, 21:36:57
// Using no extra variables, hence lesser space adn time complexity
1/**
2 * @param {number[]} nums1
3 * @param {number} m
4 * @param {number[]} nums2
5 * @param {number} n
6 * @return {void} Do not return anything, modify nums1 in-place instead.
7 */
8var merge = function(nums1, m, nums2, n) {
9    let i = m+n-1;  
10    let f = m-1 ; 
11    let s = n-1;
12    
13    while (s>=0){ 
14        if (nums1[f] > nums2[s] ){
15            nums1[i]= nums1[f]; 
16            i--; 
17            f--;
18        }
19        else{
20        nums1[i]= nums2[s]; 
21        i--;
22        s--;
23        }
24    }
25
26};