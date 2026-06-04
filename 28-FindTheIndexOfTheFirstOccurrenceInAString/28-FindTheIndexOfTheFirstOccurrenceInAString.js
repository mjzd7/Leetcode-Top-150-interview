// Last updated: 04/06/2026, 15:53:51
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
let abc =  haystack.match(needle);
if (haystack.indexOf(abc)!==null) {
return haystack.indexOf(abc)
} else return -1;
};