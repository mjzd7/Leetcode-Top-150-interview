// Last updated: 11/05/2026, 23:31:36
1/**
2 * @param {number[]} gas
3 * @param {number[]} cost
4 * @return {number}
5 */
6var canCompleteCircuit = function(gas, cost) {
7    let totalGas = 0;
8    let totalCost= 0;
9    let startingIndex=0;
10    let diff=0;     
11    
12    for(let i=0;i<gas.length;i++){
13        totalCost+=cost[i];
14        totalGas+=gas[i];
15    }
16    if(totalGas>=totalCost){
17        for(let i = 0; i<gas.length;i++){
18            diff += gas[i]- cost[i]
19            if (diff<0){
20                startingIndex = i+1;
21                diff =0;
22            }
23        }
24        return startingIndex;
25    }
26    else if (totalGas<totalCost){
27        return -1
28    }
29};