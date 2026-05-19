// Last updated: 20/05/2026, 05:28:37
/*
 * Here are some concise reading notes summarizing your solution's approach and complexity that you can paste right into your LeetCode Tracker!
 * 
 * ### **Problem: Longest Common Prefix**
 * 
 * **Approach: Vertical Scanning**
 * This solution uses a character-by-character "vertical" comparison strategy:
 * 
 * 1. **Reference String:** We use the very first string in the array (`strs[0]`) as our baseline template.
 * 2. **Outer Loop (`i`):** Iterate through each character of the reference string.
 * 3. **Inner Loop (`j`):** Iterate through all the *other* strings in the array to compare characters at the current index `i`.
 * 4. **Early Exit:** If we hit the end of any other string (meaning it's shorter than our current prefix length) OR if we find a character mismatch, we immediately stop and return the sliced prefix up to that point.
 * 5. **Full Match:** If the outer loop finishes without triggering the early exit, the entire first string is the common prefix.
 * 
 * **Time Complexity: $O(N \cdot M)$**
 * 
 * * $N$ is the number of strings in the array, and $M$ is the length of the shortest string.
 * * In the worst-case scenario (where all strings are identical), we check every character up to the length of the shortest string. This is also often written as $O(S)$, where $S$ is the total sum of all characters across all strings.
 * 
 * **Space Complexity: $O(1)$**
 * 
 * * We only use a few pointers (`i`, `j`, `char`) for the comparisons, requiring constant extra memory regardless of the input size. (Note: The sliced string returned at the end requires some space, but the algorithmic matching process itself is strictly $O(1)$).
*/

1/**
2 * @param {string[]} strs
3 * @return {string}
4 */
5var longestCommonPrefix = function (strs) {
6    if (!strs.length) return "";
7    for (let i = 0; i < strs[0].length; i++) {
8        const char = strs[0][i];
9
10
11        //the template is created above
12
13        for (let j = 1; j < strs.length; j++) {
14            if (i === strs[j].length || strs[j][i] !== char) {
15                return strs[0].slice(0, i);
16            }
17        }
18
19
20    }
21    return strs[0];
22};