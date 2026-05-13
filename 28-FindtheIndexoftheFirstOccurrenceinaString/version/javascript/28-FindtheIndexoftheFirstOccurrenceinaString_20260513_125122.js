// Last updated: 13/05/2026, 12:51:22
// use indexOf property to find out the index after using match property as it returns array of information that includes the index of array.
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7let abc =  haystack.match(needle);
8console.log(abc);
9if (haystack.indexOf(abc)!==null) {
10return haystack.indexOf(abc)
11} else return -1;
12};