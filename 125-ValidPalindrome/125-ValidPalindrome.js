// Last updated: 04/06/2026, 15:53:45
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;
    //Helper function to check validity without regex using charcodes
    function checker(char) {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
    }
    // const arr=[];
    // arr.push(1);
    // arr.push[i][i]  
    //check whether is vaild aplhanumeric or not, if not skip
    while (left < right) {
        while (left < right && !checker(s[left])) {
            left++;
        }
        while (left < right && !checker(s[right])) {
            right--;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true
};