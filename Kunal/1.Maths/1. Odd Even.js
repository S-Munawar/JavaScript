/**
 * Question: Determine if a number is odd or even using bitwise operators.
 */

/**
 * Optimal Solution: Bitwise AND
 * Description: An odd number always has its 1st (rightmost) bit set to 1. An even number has it set to 0. We can use the bitwise AND operator with 1 to extract the rightmost bit.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function isOddOptimal(num) {
    return (num & 1) === 1;
}

/**
 * Suboptimal Solution: Modulo Operator
 * Description: Uses the modulo operator to find the remainder when divided by 2. This is perfectly fine but technically slightly slower than bitwise operations at the CPU level.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function isOddSuboptimal(num) {
    return num % 2 !== 0;
}

const num = 54;
console.log(isOddOptimal(num)); // false
console.log(isOddSuboptimal(num)); // false
