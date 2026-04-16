/**
 * Question: LeetCode 509. Fibonacci Number
 * Description: The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.
 */

/**
 * Optimal Solution: Iterative Tabulation Array
 * Description: Store the computed states iteratively. Eliminates redundant processing required by base recursion.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function fibonacciOptimal(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return Math.max(0, n) === n ? fib.slice(0, n) : [];
}

/**
 * Suboptimal Solution: Standard Recursion
 * Description: Calculates Fibonacci by repetitively calling itself, recalculating previously found subsequences (branches into two paths). Time complexity explodes exponentially.
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 */
function recursiveFibonacciSuboptimal(n) {
    if (n < 2) {
        return n
    }
    return recursiveFibonacciSuboptimal(n - 1) + recursiveFibonacciSuboptimal(n - 2)
}

console.log(recursiveFibonacciSuboptimal(6)) // 8
console.log(fibonacciOptimal(6)) // [0, 1, 1, 2, 3, 5]