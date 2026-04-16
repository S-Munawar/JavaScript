/**
 * Question: Find the position of the rightmost set bit in a number.
 * Note: Returns 1-based index from the rightmost bit.
 */

/**
 * Optimal Solution: Two's Complement Isolation
 * Description: Inverting a number and adding 1 (`~num + 1` or simply `-num` which is Two's Complement) creates a number where all bits to the left of the rightmost set bit are flipped, and all bits to the right are the same (which are 0s). Applying Bitwise AND with the original number isolates only the rightmost set bit. Then, take Math.log2() + 1 to find its 1-based index position.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function rightMostSetBitOptimal(num) {
    if (num === 0) return 0; // Edge case
    // Isolate the rightmost set bit
    const isolatedBit = (~num + 1) & num; // Alternatively: num & -num
    // Find the position (1-based)
    return Math.floor(Math.log(isolatedBit) / Math.log(2)) + 1;
}

console.log(rightMostSetBitOptimal(10)); // 10 is 1010 in binary, rightmost set bit is at pos 2