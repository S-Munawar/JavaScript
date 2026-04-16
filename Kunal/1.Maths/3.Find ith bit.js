/**
 * Question: Find the ith bit of a number.
 * Note: Assumes 1-based indexing for bits starting from the rightmost bit.
 */

/**
 * Optimal Solution: Right Shift and Bitwise AND
 * Description: Shift the number to the right by (i - 1) positions, effectively making the ith bit the rightmost bit. Then, use Bitwise AND with 1 to extract it.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function findBitOptimal(num, bit) {
    return (num >> (bit - 1)) & 1;
}

/**
 * Suboptimal Solution: Left Shift Mask and Bitwise AND
 * Description: Create a mask by shifting 1 to the left by (i - 1) positions. Use Bitwise AND with the original number. If the result is not 0, the bit is 1. If 0, the bit is 0.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function findBitSuboptimal(num, bit) {
    const mask = 1 << (bit - 1);
    const res = num & mask;
    return res === 0 ? 0 : 1;
}

console.log(findBitOptimal(54, 5));
console.log(findBitSuboptimal(54, 5));