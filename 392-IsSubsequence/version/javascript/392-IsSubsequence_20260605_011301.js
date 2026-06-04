// Last updated: 05/06/2026, 01:13:01
1/**
2 * @param {string} s
3 * @param {string} t
4 * @return {boolean}
5 */
6//Helper function to find the upper bound
7//This finds the smallest index in array that is strictly greater than the target.
8const findNextIndex = function (arr, target) {
9    let left = 0;
10    let right = arr.length - 1;
11    let result = -1;
12    while (left <= right) {
13        let mid = Math.floor((left + right) / 2);
14
15        if (arr[mid] > target) {
16            //index is valid but check if there is a smaller valid one to the left
17            result = arr[mid];
18            right = mid - 1;
19        }
20        else {
21            // The index is too small look to the right
22            left = mid + 1;
23        }
24    }
25    return result;
26}
27
28//Main function for multiple incoming strings
29var isSubsequence = function (s, t) {
30    //Making a hash map or map for string t
31    const charIndices = new Map();
32    // putting values in the hash map in format character : [Indices ]
33    for (let i = 0; i < t.length; i++) {
34        const char = t[i];
35        if (!charIndices.has(char)) {
36            charIndices.set(char, []);
37        }
38        charIndices.get(char).push(i);
39    }
40    // process string s using binary Search
41    let prevMatchIndex = -1;
42    // tracks position of the last matched character in string t
43    for (let i = 0; i < s.length; i++) {
44        const char = s[i];
45        // If character doesn't exist at all in the string t; it is not a sunstring. 
46        if (!charIndices.has(char)) {
47            return false;
48        }
49        const indicesList = charIndices.get(char);
50        //Find the first occourence of char in t that comes after the previous match 
51        const nextValidIndex = findNextIndex(indicesList, prevMatchIndex);
52        if (nextValidIndex === -1) {
53            return false;
54        }
55        //update our pointer to search for the next character search 
56        prevMatchIndex = nextValidIndex;
57    }
58    return true;
59
60};