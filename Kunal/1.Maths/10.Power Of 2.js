/**
 * Question: LeetCode 231. Power of Two
 * Description: Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 */

/**
 * Optimal Solution: Bitwise AND
 * Description: A power of 2 has exactly one bit set to 1. E.g., 8 is 1000. `n - 1` flips all the bits up to that 1, e.g., 7 is 0111. Therefore, `n & (n - 1)` will always be 0 for powers of 2. We also check `n > 0` since negative numbers/0 are not powers of 2.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function isPowerOfTwoOptimal(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

/**
 * Suboptimal Solution: Iterative division by 2
 * Description: Continuously divide the number by 2 as long as it is divisible by 2. If it reaches 1, it's a power of 2.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function isPowerOfTwoSuboptimal(n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n /= 2;
    }
    return true;
}

console.log(isPowerOfTwoOptimal(16)); // true
console.log(isPowerOfTwoSuboptimal(16)); // true
