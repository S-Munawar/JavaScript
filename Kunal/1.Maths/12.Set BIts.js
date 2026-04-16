/**
 * Question: LeetCode 191. Number of 1 Bits
 * Description: Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).
 */

/**
 * Optimal Solution: Brian Kernighan's Algorithm
 * Description: An expression `n & (n - 1)` will systematically clear the rightmost set bit. We count the number of times we drop this operation until the number becomes zero.
 * Time Complexity: O(k) where k is the number of set bits.
 * Space Complexity: O(1)
 */
function setBitsOptimal(num) {
    let count = 0;
    while (num > 0) {
        count++;
        num &= (num - 1);
    }
    return count;
}

/**
 * Suboptimal Solution: Shift and AND
 * Description: Iteratively shifts the bits to the right and checks if the last bit is a 1 by doing a Bitwise AND 1. Suboptimal because it always loops proportionally to the number of bits if the number is large.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function setBitsSuboptimal(num) {
    let count = 0;
    while (num > 0) {
        count += (num & 1); // Add 1 if the last bit is 1, else 0
        num >>= 1;          // Shift right
    }
    return count;
}

console.log(setBitsOptimal(10)); // 10 is 1010, resulting in 2
console.log(setBitsSuboptimal(10)); // 10 is 1010, resulting in 2