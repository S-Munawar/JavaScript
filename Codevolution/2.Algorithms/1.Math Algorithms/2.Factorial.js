/**
 * Question: Find the factorial of a given integer n.
 * Description: The factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
 */

/**
 * Optimal Solution: Iterative Loop
 * Description: Uses a simple for-loop starting from 2 up to n. Efficient as it runs strictly in linear time without taking up the call stack.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function factorialOptimal(n) {
    let factorialResult = 1;
    for (let i = 2; i <= n; i++) {
        factorialResult *= i;
    }
    return factorialResult;
}

/**
 * Suboptimal Solution: Recursion
 * Description: Factorial calculation via mathematical mathematical reduction (n * (n-1)!).
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function recursiveFactorialSuboptimal(n) {
    if (n === 0) {
        return 1;
    }
    return recursiveFactorialSuboptimal(n - 1) * n;
}

console.log(recursiveFactorialSuboptimal(5)) // 120
console.log(factorialOptimal(0)) // 1