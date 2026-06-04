// Last updated: 04/06/2026, 15:53:42
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let sArray = s.split(' ').filter((elem) => elem!== '')
  let start = 0;
  let end = sArray.length-1
  while (start<end){
    temp = sArray[start];
    sArray[start]= sArray[end];
    sArray[end]= temp;
    start++;
    end--;
  }
  if(start>=end){
    return sArray.join(' ')
  }
    
};