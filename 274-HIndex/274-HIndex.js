// Last updated: 09/05/2026, 03:08:13
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let l = citations.length
    let freq= new Array(l+1).fill(0);
    for(let i= 0; i < l;i++){
        if (citations[i]<l){
            freq[citations[i]]++;
        }
        if (citations[i]>=l){
            freq[l]++;
        }
    }
    let count = 0;
    for(let j=l; j>0;j--){
        count += freq[j];
        if (count>=j) return j;
    }
    return 0;
};