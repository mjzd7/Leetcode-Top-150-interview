// Last updated: 11/06/2026, 00:40:44
// This is the approach using HashMap or hash set in order to solve the question threesome though it has complications when being used in JavaScript but at the same time It is one of the approaches that could be told to the interview, but the most optimized approach for this particular question is two-pointer approach only.
1/**
2 * @param {number[]} nums
3 * @return {number[][]}
4 */
5var threeSum = function (nums) {
6    nums.sort((a, b) => a - b);
7    let result = [];
8
9    for (let i = 0; i < nums.length - 2; i++) {
10        if (i > 0 && nums[i] === nums[i - 1]) continue;
11        if (nums[i] > 0) break;
12        const seen = new Set();
13
14        for (let j = i + 1; j < nums.length; j++) {
15            let needed = -(nums[i] + nums[j]);
16            if (seen.has(needed)) {
17                result.push([nums[i], needed, nums[j]]);
18                while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
19                    j++
20                }
21            }
22            seen.add(nums[j]);
23
24        }
25    }
26    return result;
27};