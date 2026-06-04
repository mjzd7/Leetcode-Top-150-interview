// Last updated: 05/06/2026, 01:14:23
/*
 * Here is the complete breakdown of the follow-up question, the logic behind the implementation, and the code written in JavaScript.
 * 
 * **The LeetCode Follow-Up:**
 * 
 * > "Suppose there are lots of incoming `s`, say $s_1, s_2, \dots, s_k$ where $k \ge 10^9$, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?"
 * 
 * **Why the previous approach fails here:** If you use the standard Two-Pointer approach for $10^9$ strings, your time complexity becomes $O(K \times T)$ where $K$ is the number of incoming strings and $T$ is the length of `t`. If `t` is long, scanning it from the beginning a billion times will cause a Time Limit Exceeded (TLE) error.
 * 
 * ### The Implementation Logic
 * 
 * To optimize for multiple checks, we process string `t` exactly **once** to build a map of character locations. Then, we use Binary Search to quickly verify each incoming string `s`.
 * 
 * **Step 1: Pre-processing `t` (Hash Map)**
 * We iterate through `t` and create a dictionary (or Map) where each key is a character, and the value is an array of all the indices where that character appears in `t`.
 * Because we process `t` from left to right, these index arrays will naturally be in ascending sorted order (e.g., `[0, 2, 8, 15]`).
 * 
 * **Step 2: Binary Search**
 * For each incoming string `s`, we need to find its characters in `t` in the correct relative order.
 * 
 * * We keep track of a `prevMatchIndex` (starting at `-1`), which stores the index of the most recently matched character in `t`.
 * * For each character in `s`, we look up its array of indices in our Map.
 * * We run a **Binary Search** on that array to find the *smallest index that is strictly greater than* `prevMatchIndex`.
 * * If we find one, we update `prevMatchIndex` to this new index and continue. If we don't (meaning the character doesn't exist later in `t`), we immediately return `false`.
 * 
 * ### Complexity Breakdown
 * 
 * * **Time Complexity:** * **Pre-processing:** $O(T)$ to scan `t` and build the map.
 * * **Checking `s`:** $O(S \log M)$ per incoming string, where $S$ is the length of `s` and $M$ is the number of times a character appears in `t` (the size of the array we perform binary search on).
 * * **Total for $K$ strings:** $O(T + K \cdot S \log M)$, which is vastly superior to $O(K \times T)$ for large datasets.
 * 
 * 
 * * **Space Complexity:** $O(T)$ to store the indices of `t` in the Hash Map.
*/

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