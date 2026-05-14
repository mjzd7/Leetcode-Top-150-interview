// Last updated: 14/05/2026, 18:15:37
// While loop using two pointers to check from front and back
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, "")
7let start = 0;
8let end = s1.length -1;
9 while(start<end){
10    if(s1[start] !== s1[end]){
11        return false;
12    }
13    start++;
14    end--;
15    
16 } return true;
17 };