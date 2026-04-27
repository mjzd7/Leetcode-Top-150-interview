// Last updated: 27/04/2026, 21:33:08
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
14    let fVal = nums1[f];
15    let sVal = nums2[s];
16        if (fVal > sVal ){
17            nums1[i]= fVal; 
18            i--; 
19            f--;
20        }
21        else{
22        nums1[i]= sVal; 
23        i--;
24        s--;
25        }
26        console.log("Value of S: "+s+" Value of Nums1: " + nums1)
27    }
28
29};