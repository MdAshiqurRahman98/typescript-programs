// Minimum Cost of Buying Candies with Discount

function minimumCostOfBuyingCandies(cost: number[]): number {
    cost.sort((a, b) => b - a);

    let totalCost = 0;

    for (let i = 0; i < cost.length; i++) {
        if ((i + 1) % 3 !== 0) {
            totalCost += cost[i];
        }
    }

    return totalCost;
}

const cost = [1, 2, 3];
console.log(minimumCostOfBuyingCandies(cost));