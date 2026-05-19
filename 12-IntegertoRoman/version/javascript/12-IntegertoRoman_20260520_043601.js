// Last updated: 20/05/2026, 04:36:01
// This is the array solution using greedy approach. we run a loops from array values, checking the number while it is greater than the element at the particular index and subtract it as many times as we run it and finally add to string the corresponding index values of symbol array and return the string.
1/**
2 * @param {number} num
3 * @return {string}
4 */
5var intToRoman = function (num) {
6    let str = '';
7    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
8    let symobls = ["M", 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
9    for (let i = 0; i < values.length && num > 0; i++) {
10        while (num >= values[i]) {
11            num -= values[i];
12            str += symobls[i];
13        }
14    } return str;
15};