function maxProfit(prices: number[]): number {
    let priceDiff = 0
    let buyPrice = prices[0]
    let sellPrice = 0
    for(let i = 1; i < prices.length; i++){
        if(buyPrice > prices[i]){
            buyPrice = prices[i]
        }
        if(prices[i] - buyPrice > priceDiff){
            priceDiff = prices[i] - buyPrice
        }
    }
    return priceDiff
};