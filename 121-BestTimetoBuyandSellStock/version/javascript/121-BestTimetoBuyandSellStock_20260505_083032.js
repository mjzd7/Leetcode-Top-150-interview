// Last updated: 05/05/2026, 08:30:32
// instead of thinking of absolute minimum value, think of it as local biggest gains walking from left to right. this also pases test cases where our lowest element is in end of the array and no elements are present after that.
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function (prices) {
6    let lowest = prices[0];
7    let maxProfit = 0;
8
9    for (let price = 0; price < prices.length; price++) {
10        if (prices[price] < lowest) {
11            lowest = prices[price]
12        }
13        else if (prices[price] - lowest > maxProfit) {
14            maxProfit = prices[price] - lowest;
15        }
16    }
17    return maxProfit;
18}