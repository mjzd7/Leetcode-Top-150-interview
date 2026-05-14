// Last updated: 14/05/2026, 12:29:59
// if if logic using a going down bool that keep track of direction and current bucket variable that keeps tracks of row of buckets array which has a length of minimum of s.length and numRows
1/**
2 * @param {string} s
3 * @param {number} numRows
4 * @return {string}
5 */
6var convert = function (s, numRows) {
7    const buckets = new Array(Math.min(numRows, s.length)).fill('');
8    let currentBucket = 0
9    let goingDown = false;
10    if (numRows===1 || s.length<=numRows) return s;
11    for (let i = 0; i < s.length; i++) {
12        if (currentBucket === 0) {
13            goingDown = true;
14        }
15        if (currentBucket === (numRows-1)) {
16            goingDown = false
17        }
18        if (goingDown === true) {
19            buckets[currentBucket] += (s[i]);
20            currentBucket++;
21        }
22        if (goingDown === false) {
23            buckets[currentBucket] += (s[i]);
24             currentBucket--;
25
26        }
27
28    }
29    let str = buckets.join('');
30    return str;
31};