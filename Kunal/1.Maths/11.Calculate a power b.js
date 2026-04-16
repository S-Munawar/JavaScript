/**
 * Question: LeetCode 50. Pow(x, n)
 * Description: Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 */

/**
 * Optimal Solution: Binary Exponentiation (Fast Powering)
 * Description: Calculate power based on binary representation of the exponent. If the rightmost bit is 1, multiply the result by the current base. Then square the base and shift the exponent right.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function myPowOptimal(a, b) {
    let res = 1;
    let base = a;
    let n = Math.abs(b);

    while (n > 0) {
        if ((n & 1) === 1) { // If the rightmost bit is 1
            res *= base;
        }
        base *= base; // Square the base
        n >>= 1; // Shift right to process the next bit
    }

    return b < 0 ? 1 / res : res;
}

console.log(myPowOptimal(3, 6)); // 729