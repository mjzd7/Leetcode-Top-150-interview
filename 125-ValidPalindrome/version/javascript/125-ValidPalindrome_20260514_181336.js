// Last updated: 14/05/2026, 18:13:36
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function(s) {
6  let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, "")
7    console.log(s1.length)
8let start = 0;
9let end = s1.length -1;
10 while(start<end){
11    if(s1[start] !== s1[end]){
12        return false;
13    }
14    start++;
15    end--;
16    
17 } return true;
18 };