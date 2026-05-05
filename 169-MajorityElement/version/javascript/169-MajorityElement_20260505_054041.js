// Last updated: 05/05/2026, 05:40:41
// this uses moore's voting algorithm. Iterate through the array, if majority, increment votes, if not decrement votes, if votes become zero, make the current element your majority. return majority
1/**
2 * @param {number[]} nums
3 * @return {number}
4 */
5var majorityElement = function(nums) {
6    let majority= nums[0];
7    let votes =1;
8    for (let i =1; i<nums.length;i++){
9        if(nums[i] === majority){
10            votes++;
11        }
12        if(nums[i]!== majority){ 
13            votes--; }
14    if (votes === 0){ 
15        majority=nums[i];
16        votes=1;}
17    }
18    return majority;
19};