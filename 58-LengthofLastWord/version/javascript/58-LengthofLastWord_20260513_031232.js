// Last updated: 13/05/2026, 03:12:32
/*
 * Two approaches are there
 * The first one was using split and filter function and using an array. 
 * much simpler logic was to start from end, skip the trailing spaces in string and if it is not equal to space, then increment the length and return the length
*/

1/**
2 * @param {string} s
3 * @return {number}
4 */
5var lengthOfLastWord = function(s) {
6    let length = 0;
7    let i = s.length-1;
8    while(i>=0 && s[i]===" "){
9        i-- ;
10    }
11    while(i>=0 && s[i]!==" "){
12        length++;
13        i--;
14    }
15    return length
16};