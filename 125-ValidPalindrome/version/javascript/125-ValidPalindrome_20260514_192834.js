// Last updated: 14/05/2026, 19:28:34
// custom function for checking validity of expression and skipping if not valid, then comparing the left and right, if mismatch, return false, else after exiting while statement return true.
1/**
2 * @param {string} s
3 * @return {boolean}
4 */
5var isPalindrome = function (s) {
6    let left = 0;
7    let right = s.length - 1;
8    //Helper function to check validity without regex using charcodes
9    function checker(char) {
10        const code = char.charCodeAt(0);
11        return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
12    }
13    //check whether is vaild aplhanumeric or not, if not skip
14    while (left < right) {
15        while (left < right && !checker(s[left])) {
16            left++;
17        }
18        while (left < right && !checker(s[right])) {
19            right--;
20        }
21        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
22            return false;
23        }
24    left++;
25    right--;  
26    }
27
28    return true
29};