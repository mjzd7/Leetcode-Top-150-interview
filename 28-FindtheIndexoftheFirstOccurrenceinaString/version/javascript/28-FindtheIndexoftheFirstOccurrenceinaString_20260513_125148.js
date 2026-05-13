// Last updated: 13/05/2026, 12:51:48
1/**
2 * @param {string} haystack
3 * @param {string} needle
4 * @return {number}
5 */
6var strStr = function(haystack, needle) {
7let abc =  haystack.match(needle);
8if (haystack.indexOf(abc)!==null) {
9return haystack.indexOf(abc)
10} else return -1;
11};