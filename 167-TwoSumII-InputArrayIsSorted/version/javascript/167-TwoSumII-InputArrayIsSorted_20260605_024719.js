// Last updated: 05/06/2026, 02:47:19
// two pointer approach using left and right pointers. We start from both the ends and increment left if sum of both less than target, and decrement right if sum of both greater than product.
1/**
2 * @param {number[]} numbers
3 * @param {number} target
4 * @return {number[]}
5 */
6var twoSum = function(numbers, target) {
7   let left = 0;
8   let right = numbers.length -1;
9   while(left<right){
10    if(numbers[left]+numbers[right]<target){
11        left++;
12    }
13    if(numbers[left]+numbers[right]>target){
14        right--;
15    }
16    if(numbers[left]+numbers[right]===target){
17        return[left+1,right+1]
18    }
19   } 
20};