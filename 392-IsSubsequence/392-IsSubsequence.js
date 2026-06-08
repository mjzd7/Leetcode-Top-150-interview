// Last updated: 09/06/2026, 01:01:20
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//Helper function to find the upper bound
//This finds the smallest index in array that is strictly greater than the target.
const findNextIndex = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > target) {
            //index is valid but check if there is a smaller valid one to the left
            result = arr[mid];
            right = mid - 1;
        }
        else {
            // The index is too small look to the right
            left = mid + 1;
        }
    }
    return result;
}

//Main function for multiple incoming strings
var isSubsequence = function (s, t) {
    //Making a hash map or map for string t
    const charIndices = new Map();
    // putting values in the hash map in format character : [Indices ]
    for (let i = 0; i < t.length; i++) {
        const char = t[i];
        if (!charIndices.has(char)) {
            charIndices.set(char, []);
        }
        charIndices.get(char).push(i);
    }
    // process string s using binary Search
    let prevMatchIndex = -1;
    // tracks position of the last matched character in string t
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        // If character doesn't exist at all in the string t; it is not a sunstring. 
        if (!charIndices.has(char)) {
            return false;
        }
        const indicesList = charIndices.get(char);
        //Find the first occourence of char in t that comes after the previous match 
        const nextValidIndex = findNextIndex(indicesList, prevMatchIndex);
        if (nextValidIndex === -1) {
            return false;
        }
        //update our pointer to search for the next character search 
        prevMatchIndex = nextValidIndex;
    }
    return true;

};