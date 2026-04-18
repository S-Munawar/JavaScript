/**
 * 122. Best Time to Buy and Sell Stock II
 * 
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
 * On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time.
 * However, you can buy it then immediately sell it on the same day.
 * 
 * Find and return the maximum profit you can achieve.
 */

const prices1 = [7,1,5,3,6,4]
const prices2 = [1,2,3,4,5]

// Greedy (Optimal)
// Time complexity: O(n) where n is the length of prices array
// Space complexity: O(1)
function maxProfit1(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
}

// Dynamic Programming (Space Optimized)
// Time complexity: O(n) where n is the length of prices array
// Space complexity: O(1)
function maxProfit2(prices) {
    let nextBuy = 0,
        nextSell = 0;
    let curBuy = 0,
        curSell = 0;

    for (let i = prices.length - 1; i >= 0; i--) {
        curBuy = Math.max(nextBuy, -prices[i] + nextSell);
        curSell = Math.max(nextSell, prices[i] + nextBuy);
        nextBuy = curBuy;
        nextSell = curSell;
    }

    return curBuy;
}

// Dynamic Programming (Bottom-Up)
// Time complexity: O(n) where n is the length of prices array
// Space complexity: O(n)
function maxProfit3(prices) {
    const n = prices.length;
    const dp = Array.from({ length: n + 1 }, () => Array(2).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        dp[i][0] = Math.max(dp[i + 1][0], -prices[i] + dp[i + 1][1]);
        dp[i][1] = Math.max(dp[i + 1][1], prices[i] + dp[i + 1][0]);
    }

    return dp[0][0];
}

// Dynamic Programming (Top-Down)
// Time complexity: O(n) where n is the length of prices array
// Space complexity: O(n) tracking state across dp array limits
function maxProfit4(prices) {
    const n = prices.length;
    const dp = Array.from({ length: n }, () => Array(2).fill(-1));

    const rec = (i, bought) => {
        if (i === n) {
            return 0;
        }
        if (dp[i][bought] !== -1) {
            return dp[i][bought];
        }
        let res = rec(i + 1, bought);
        if (bought) {
            res = Math.max(res, prices[i] + rec(i + 1, 0));
        } else {
            res = Math.max(res, -prices[i] + rec(i + 1, 1));
        }
        dp[i][bought] = res;
        return res;
    };

    return rec(0, 0);
}

// Recursion (Brute Force)
// Time complexity: O(2^n) scaling combinatorially
// Space complexity: O(n) due to recursion stack layer depth
function maxProfit5(prices) {
    const rec = (i, bought) => {
        if (i === prices.length) {
            return 0;
        }
        let res = rec(i + 1, bought);
        if (bought) {
            res = Math.max(res, prices[i] + rec(i + 1, false));
        } else {
            res = Math.max(res, -prices[i] + rec(i + 1, true));
        }
        return res;
    };
    return rec(0, false);
}


console.log("Greedy (Optimal):")
console.log(maxProfit1([...prices1]))
console.log(maxProfit1([...prices2]))

console.log("\nDynamic Programming (Space Optimized):")
console.log(maxProfit2([...prices1]))
console.log(maxProfit2([...prices2]))

console.log("\nDynamic Programming (Bottom-Up):")
console.log(maxProfit3([...prices1]))
console.log(maxProfit3([...prices2]))

console.log("\nDynamic Programming (Top-Down):")
console.log(maxProfit4([...prices1]))
console.log(maxProfit4([...prices2]))

console.log("\nRecursion (Brute Force):")
console.log(maxProfit5([...prices1]))
console.log(maxProfit5([...prices2]))
