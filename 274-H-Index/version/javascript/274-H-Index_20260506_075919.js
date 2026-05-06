// Last updated: 06/05/2026, 07:59:19
// This solution relies on counting sort or bucket sort approach, which works on the logic that whenever you encounter an element, you make an array that has one more element than the last array and you increment like initialize the array to zero and increment each time you encounter an element and if the element is greater than Length of the first array, then store it in the last index, and later on start calculating from the end. Whenever your Variable matches the total count from the end. You will find your h index
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
20
21        if (count>=j) return j;
22    }
23    return 0;
24};