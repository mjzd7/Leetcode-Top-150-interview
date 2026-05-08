// Last updated: 09/05/2026, 03:08:35
// Greedy approach code says it all.
1/**
2 * @param {number[]} gas
3 * @param {number[]} cost
4 * @return {number}
5 */
6var canCompleteCircuit = function (gas, cost) {
7    let totalGas = 0;
8    let totalCost = 0;
9    let diff = 0;
10    let startindex = 0;
11
12    for (i=0;i<gas.length;i++) {
13        totalGas += gas[i];
14        totalCost += cost[i];
15    }
16
17    //Since one unique solution exists we use greedy approach to find current gas tank using diff variable.
18    for (i = 0; i < gas.length; i++) {
19        diff += gas[i] - cost[i];
20
21        //if diff is less than zero, reset diff to zero, increment startindex by one
22        if (diff < 0) {
23            startindex = i + 1;
24            diff = 0;
25        }
26    }
27    // if solution is not possible return -1
28    if (totalGas < totalCost) { return -1; } else {
29        return startindex;
30    }
31};
32