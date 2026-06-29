// Last updated: 29/06/2026, 13:51:46
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    if (!s || words.length === 0) return [];

    let wordLength = words[0].length;
    let freqMap = new Map();
    for (let word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1)
    }
    let result = [];

    for (let i = 0; i < wordLength; i++) {
        totalLength = words.length;
        let left = i;
        let right = i;
        let seenMap = new Map();
        let count = 0;



        while (right + wordLength <= s.length) {
            let currentWord = s.substring(right, right + wordLength);
            right += wordLength;

            if (freqMap.has(currentWord)) {
                seenMap.set(currentWord, (seenMap.get(currentWord) || 0) + 1);
                count++;

                while (seenMap.get(currentWord) > freqMap.get(currentWord)) {
                    let leftWord = s.substring(left, left + wordLength);
                    seenMap.set(leftWord, seenMap.get(leftWord) - 1);
                    count--;
                    left += wordLength;
                }
                if (count === totalLength) {
                    result.push(left);
                }

            }

            else {
                seenMap.clear();
                left = right;
                count = 0;
            }

        }

    }
    return result;
};