// Last updated: 05/06/2026, 02:51:54
// fully optimised version of two pointer approach.
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7   let left = 0;
8   let right = numbers.length -1;
9   while(left<right){
10    const currSum = numbers[left]+numbers[right];
11        if(currSum===target){
12        return[left+1,right+1]
13    }
14    if(currSum<target){
15        left++;
16    }
17    else  right--;
18
19   } 
20};