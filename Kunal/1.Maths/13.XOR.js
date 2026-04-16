/**
 * Question: Find the XOR of numbers from 0 to a, and find XOR of numbers in range [a, b].
 */

/**
 * Optimal Solution: Pattern Matching
 * Description: The mathematical XOR sum from 0 to n follows a repeating pattern of length 4.
 * If n % 4 == 0, XOR sum = n.
 * If n % 4 == 1, XOR sum = 1.
 * If n % 4 == 2, XOR sum = n + 1.
 * If n % 4 == 3, XOR sum = 0.
 * To find XOR sum from a to b, we do XOR sum(b) ^ XOR sum(a - 1). This runs in pure O(1).
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function xorSumPattern(a) {
    if (a % 4 === 0) return a;
    if (a % 4 === 1) return 1;
    if (a % 4 === 2) return a + 1;
    return 0;
}

function xorOfRangeOptimal(a, b) {
    return xorSumPattern(b) ^ xorSumPattern(a - 1);
}

/**
 * Suboptimal Solution: Linear Iteration
 * Description: Iterate from a to b and XOR all the numbers sequentially.
 * Time Complexity: O(N) where N = b - a
 * Space Complexity: O(1)
 */
function xorOfRangeSuboptimal(a, b) {
    let xor = 0;
    for (let i = a; i <= b; i++) {
        xor ^= i;
    }
    return xor;
}

console.log(xorOfRangeOptimal(3, 9)); // 2
console.log(xorOfRangeSuboptimal(3, 9)); // 2
console.log(xorSumPattern(9)); // 1
