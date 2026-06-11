// Last updated: 11/06/2026, 10:29:56
// This is good brute force solution using strings. Here we iterate strength ways and check for the right most is included in the substring or not if it's included we keep including the if it's not included we keep including the count and incrementing the right finally written the maximum of max or count
1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLongestSubstring = function(s) {
6  // brute force using strings
7  let max = 0;
8  let count =0;
9  for(let left = 0;left<s.length;left++){
10    count= 0;
11    let right = left;
12    while(right<s.length && !s.substring(left,right).includes(s[right]))
13    {
14        count++;
15        right++;
16    }
17    max = Math.max(count,max);
18  }  
19    return max;
20};