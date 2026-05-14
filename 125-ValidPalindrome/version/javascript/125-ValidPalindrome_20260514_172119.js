// Last updated: 14/05/2026, 17:21:19
// the brute force solution uses a cleaned copy of string that has been cleaned using regex /[^a-z0-9]/g to replace the lowercase version of original string and comparing it to the reversed version of the string. to make reversed version we need to first split it, then then reverse it and finally join it and compare
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, "")
7  console.log(s1);
8  console.log(s1.reverse);
9  if(s1 === s1.split('').reverse().join('')){
10    return true
11  } else return false;
12};