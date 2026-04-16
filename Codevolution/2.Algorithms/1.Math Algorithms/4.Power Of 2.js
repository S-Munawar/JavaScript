/**
 * Question: LeetCode 231. Power of Two
 * Description: Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2^x.
 */

/**
 * Optimal Solution: Bitwise AND
 * Description: A power of two in binary uniquely contains merely one `1` bit. Therefore `n & (n - 1)` will flip the highest bit zeroing out the value exactly when true.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function bitWisePowerOf2Optimal(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

/**
 * Suboptimal Solution: Iterative division by 2
 * Description: Continuously divide by 2 checking if non-even remainders appear.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function powerOf2Suboptimal(n) {
    if (n < 1) {
        return false;
    }
    let i = n;
    while (i > 1) {
        if (i % 2 !== 0) {
            return false;
        }
        i = i / 2;
    }
    return true;
}

console.log(bitWisePowerOf2Optimal(4)) // true
console.log(powerOf2Suboptimal(4)) // true