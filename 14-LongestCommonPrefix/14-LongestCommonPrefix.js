// Last updated: 04/06/2026, 15:53:54
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return "";
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];


        //the template is created above

        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].slice(0, i);
            }
        }


    }
    return strs[0];
};