// Last updated: 06/05/2026, 07:59:58
1/**
2 * @param {number[]} citations
3 * @return {number}
4 */
5var hIndex = function(citations) {
6    let l = citations.length
7    let freq= new Array(l+1).fill(0);
8    for(let i= 0; i < l;i++){
9        if (citations[i]<l){
10            freq[citations[i]]++;
11        }
12        if (citations[i]>=l){
13            freq[l]++;
14        }
15    }
16    let count = 0;
17    for(let j=l; j>0;j--){
18        count += freq[j];
19        console.log(freq)
20        if (count>=j) return j;
21    }
22    return 0;
23};