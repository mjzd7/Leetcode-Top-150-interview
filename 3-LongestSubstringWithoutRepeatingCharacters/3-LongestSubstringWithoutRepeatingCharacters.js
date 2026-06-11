// Last updated: 11/06/2026, 10:29:25
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // brute force using strings
  let max = 0;
  let count =0;
  for(let left = 0;left<s.length;left++){
    count= 0;
    let right = left;
    while(right<s.length && !s.substring(left,right).includes(s[right]))
    {
        count++;
        right++;
    }
    max = Math.max(count,max);
  }  
    return max;
};