// Last updated: 04/06/2026, 15:53:57
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
     if(numRows ===1 || s.length<= numRows) return s;
    let Buckets = new Array(Math.min(s.length, numRows)).fill('');
    let goingDown = false;
    let count = 0;
   
    for (let i = 0; i < s.length; i++) {
        Buckets[count]  +=s[i];

      if(count === 0 || count === numRows -1){
        goingDown = !goingDown;
      }
      goingDown ? count++ : count --;
    }
    return Buckets.join('');
};