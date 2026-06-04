// Last updated: 04/06/2026, 18:54:32
/*
 * This solution uses while loops that check both the strings using two pointers. We check till the length of both strings. which ever is found. earlier. 
 * If the Substring is found and confirmed then we return true, if the string is traversed first then we return false. here we have a edge case that what happens if we pass an empty string. here it should return true.
*/

1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6var isSubsequence = function (s, t) {
7    let i = 0; let j = 0;
8    if(s.length === 0) return true;
9
10    while (i < s.length) {
11        while (j < t.length) {
12            if (s[i] === t[j]) {
13                i++;
14                j++;
15            }
16            else j++;
17        }
18        if (i === s.length) {
19            return true;
20        }
21        else return false;
22    }
23
24};