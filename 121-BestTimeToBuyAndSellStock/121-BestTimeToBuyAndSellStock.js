// Last updated: 09/05/2026, 03:08:16
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lowest = prices[0];
    let maxProfit = 0;

    for (let price = 0; price < prices.length; price++) {
        if (prices[price] < lowest) {
            lowest = prices[price]
        }
        else if (prices[price] - lowest > maxProfit) {
            maxProfit = prices[price] - lowest;
        }
    }
    return maxProfit;
}