// my solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, min = prices[0], max = prices[0];

    for(let i = 0; i < prices.length ; i++){
        if(prices[i] < min){
            min = prices[i];
            max = min;
        } else {
            max = prices[i]
            profit = max - min > profit ? max - min : profit;
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]));