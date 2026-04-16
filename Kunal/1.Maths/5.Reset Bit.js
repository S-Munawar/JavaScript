/**
 * Question: Reset (clear) the ith bit of a number to 0.
 * Note: Assumes 1-based indexing for bits starting from the rightmost bit.
 */

/**
 * Optimal Solution: Bitwise AND with Inverted Left Shift Mask
 * Description: Create a mask with 1 at the ith position (`1 << (bit - 1)`). Invert the mask using Bitwise NOT (`~`) so the ith position is 0 and all other positions are 1. Finally, use Bitwise AND with the original number to clear the specific bit without affecting others.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function resetBitOptimal(num, bit) {
    const mask = ~(1 << (bit - 1));
    return num & mask;
}

console.log(resetBitOptimal(10, 2));