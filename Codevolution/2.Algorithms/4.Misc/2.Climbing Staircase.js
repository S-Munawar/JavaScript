/**
 * Question: LeetCode 70. Climbing Stairs
 * Description: You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * Optimal Solution: Bottom-Up Dynamic Programming (Fibonacci)
 * Description: The number of ways to reach step n is the sum of ways to reach step n-1 and n-2. We can build an array up to `n` remembering these steps.
 * Time Complexity: O(n)
 * Space Complexity: O(n) (Can be O(1) if tracking only last two vars)
 */
function climbingStaircase(n) {
    const ways = [1, 2];
    for (let i = 2; i < n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2];
    }
    return ways[n - 1]; // Because we are asking for exactly `n`, and indices are 0-based.
}

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(2)); // 2
console.log(climbingStaircase(4)); // 5