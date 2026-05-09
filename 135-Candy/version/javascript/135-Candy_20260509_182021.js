// Last updated: 09/05/2026, 18:20:21
/*
 * This Solution uses O(n) space and time complexity and we do it using creating a new array to store the no. of candies allotted to a child based on rating, first we compare starting from 1st index all the way to end in the left pass and filling out values. then we do a pass right to left again starting from second last index to check the right neighbour of the child and assign current element the max of previous element + 1 or current element. 
 * Then we iterate array to return the sum.
*/

1/**
2 * @param {number[]} ratings
3 * @return {number}
4 */
5var candy = function(ratings) {
6 let arr = new Array(ratings.length).fill(1);
7//  let sum =0;
8
9 //left pass
10 for (let i=1;i<ratings.length;i++)
11    if(ratings[i]>ratings[i-1]){
12        arr[i]=arr[i-1]+1;
13    }
14    //right pass
15    for (let i= ratings.length-2;i>=0;i--){
16        if(ratings[i]>ratings[i+1]){
17                arr[i]= Math.max(arr[i],arr[i+1]+1)
18        }
19    }
20    //Total of arr
21    let sum = arr.reduce((a,b) => a+b,0)
22    // for (i=0;i<ratings.length;i++){
23    //     sum+=arr[i];
24    // }
25    return sum
26};