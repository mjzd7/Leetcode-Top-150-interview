// Last updated: 13/05/2026, 12:36:41
1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseWords = function(s) {
6
7  let sArray = s.split(' ').filter((elem) => elem!== '')
8  let start = 0;
9  let end = sArray.length-1
10  while (start<end){
11    temp = sArray[start];
12    sArray[start]= sArray[end];
13    sArray[end]= temp;
14    start++;
15    end--;
16  }
17  if(start>=end){
18    return sArray.join(' ')
19  }
20    
21};