/**
 * Question: Find the nth Magic Number.
 * Description: A Magic Number is calculated using powers of 5 multiplied by the binary digits of the nth number.
 * E.g. For n = 6 (binary 110), magic number is: 0 * (5^1) + 1 * (5^2) + 1 * (5^3) = 0 + 25 + 125 = 150.
 */

/**
 * Optimal Solution: Bitwise Expansion
 * Description: Iterate through the bits of `n`. For each bit, check if it's a 1 using Bitwise AND (`n & 1`). Multiply it by the current power of 5 (base), add to answer, and shift `n` to the right to process the next bit.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function magicNumberOptimal(n) {
    let ans = 0;
    let base = 5;

    while (n > 0) {
        let lastBit = n & 1; // Extract rightmost bit
        ans += lastBit * base;
        
        base *= 5; // Increment the power of 5
        n >>= 1;   // Shift right to process next bit
    }

    return ans;
}

console.log(magicNumberOptimal(6));