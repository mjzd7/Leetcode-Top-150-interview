// Last updated: 20/05/2026, 04:57:47
// This is the fastest execution done using a lookup table. make 4 arrays, of symbols - t,h,tens, and ones. now the index are mapped as per the values, that can be calculated using Math.floor and modulus and division for each element.
1/**
2 * @param {number} num
3 * @return {string}
4 */
5var intToRoman = function (num) {
6    const thousands = ['', 'M', 'MM', 'MMM'];
7    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
8    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
9    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
10return thousands[Math.floor(num/1000)]+hundreds[Math.floor((num%1000)/100)]+tens[Math.floor((num%100)/10)]+ones[Math.floor(num%10)];
11};
12