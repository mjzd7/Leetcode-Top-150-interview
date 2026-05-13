// Last updated: 13/05/2026, 12:36:14
/*
 * convert to array using split then remove spaces. 
 * finally traverse from start and end, swapping last and first elements, swapping all and finally return array joining it with spaces.
*/

1/**
2 * @param {string} s
3 * @return {string}
4 */
5var reverseWords = function(s) {
6
7  let sArray = s.split(' ').filter((elem) => elem!== '')
8  console.log(sArray);
9  let start = 0;
10  let end = sArray.length-1
11  while (start<end){
12    temp = sArray[start];
13    sArray[start]= sArray[end];
14    sArray[end]= temp;
15    start++;
16    end--;
17  }
18  if(start>=end){
19    return sArray.join(' ')
20  }
21    
22};