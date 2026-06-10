// Last updated: 11/06/2026, 01:05:31
// Here instead of standard two pointer approach we need to break this problem down and we have a initially fixed number i then we use left and right pointers to i trade. inwards finding a target which in order to simplify our calculation and make our code precise is minus numzi and then we check at various left and right pointers and when Whenever we found we find a triplet, we store it in a new array result or array triplet and output the result.
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function (nums) {
6
7    let triplets = [];
8    nums.sort((a, b) => a - b);
9
10    for (let i = 0; i < nums.length - 2; i++) {
11        let left = i + 1;
12        let right = nums.length - 1;
13        if (nums[i] > 0) break;
14        if (i > 0 && nums[i] === nums[i - 1]) continue;
15
16        let target = -(nums[i]);
17
18        while (left < right) {
19            let currSum = nums[left] + nums[right];
20            if (target === currSum) {
21                triplets.push([nums[i], nums[left], nums[right]]);
22
23                while (left < right && nums[left] === nums[left + 1]) left++;
24                while (left < right && nums[right] === nums[right - 1]) right--;
25
26                left++;
27                right--;
28
29            }
30            else if (currSum < target) {
31                left++;
32            } else {
33                right--;
34            }
35
36        }
37    }
38    return triplets;
39};