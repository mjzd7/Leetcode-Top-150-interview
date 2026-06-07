// Last updated: 07/06/2026, 05:43:15
/*
 * This solution checks for the condition if left and right has sum that is true or not. yes return the index of elements starting with one. 
 * if less than target then increment left,
 * if more than the target than decrement right.
*/

1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7    let left = 0;
8    let right = numbers.length -1;
9
10    while(left <right){
11        if(numbers[left]+numbers[right]===target){
12            return [left+1,right+1]
13        }
14        else if(numbers[left]+numbers[right]<target){
15            left++;
16        }
17        else {
18            right--;
19    }
20    }
21};