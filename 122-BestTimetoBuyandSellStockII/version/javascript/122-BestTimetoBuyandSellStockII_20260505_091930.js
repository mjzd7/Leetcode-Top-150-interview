// Last updated: 05/05/2026, 09:19:30
// when ever prices[i] greater than prices[i-1] make diff = thier difference and add it to total. we are calculating local maximas- local minimas here for maximum profit multiple times.
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function(prices) {
6    let total=0; 
7    for (let i=1;i<prices.length;i++){
8        if(prices[i]>prices[i-1]){
9            let diff = prices[i]-prices[i-1];
10            total+=diff;
11        }
12    }
13    return total;
14};