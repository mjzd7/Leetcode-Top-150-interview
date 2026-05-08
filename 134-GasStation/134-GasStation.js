// Last updated: 09/05/2026, 03:08:11
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let diff = 0;
    let startindex = 0;

    for (i=0;i<gas.length;i++) {
        totalGas += gas[i];
        totalCost += cost[i];
    }

    //Since one unique solution exists we use greedy approach to find current gas tank using diff variable.
    for (i = 0; i < gas.length; i++) {
        diff += gas[i] - cost[i];

        //if diff is less than zero, reset diff to zero, increment startindex by one
        if (diff < 0) {
            startindex = i + 1;
            diff = 0;
        }
    }
    // if solution is not possible return -1
    if (totalGas < totalCost) { return -1; } else {
        return startindex;
    }
};
