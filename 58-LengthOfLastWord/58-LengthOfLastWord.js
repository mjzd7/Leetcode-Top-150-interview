// Last updated: 14/04/2026, 09:38:54
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let array = s.trim().split(' ');
 let fuck = array[array.length-1].length;
  return fuck;
};