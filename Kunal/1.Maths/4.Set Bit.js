/**
 * Question: Set the ith bit of a number.
 * Note: Assumes 1-based indexing for bits starting from the rightmost bit.
 */

/**
 * Optimal Solution: Bitwise OR with Left Shift Mask
 * Description: Create a mask by shifting 1 to the left (i - 1) times. This creates a binary number with a 1 at the ith position and 0s elsewhere. Using Bitwise OR with the original number ensures the ith bit becomes 1, while all other bits remain unchanged.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function setBitOptimal(num, bit) {
    return num | (1 << (bit - 1));
}

console.log(setBitOptimal(54, 5));