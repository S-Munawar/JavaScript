/**
 * Question: Find the number of digits of a given number `num` in a specific `base`.
 */

/**
 * Optimal Solution: Pure Math (Logarithm)
 * Description: The mathematically fastest way to find digits in any base is using the formula: floor(log_base_b(num)) + 1. Since JavaScript's Math.log() calculates the natural logarithm (base e), we use the change of base formula: Math.log(num) / Math.log(base).
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function numberOfDigitsOptimal(num, base) {
    return Math.floor(Math.log(num) / Math.log(base)) + 1;
}

/**
 * Suboptimal Solution: Iterative Division
 * Description: Keep dividing the number by the given base until it becomes 0, incrementing a count on each division.
 * Time Complexity: O(log_base(num))
 * Space Complexity: O(1)
 */
function numberOfDigitsSuboptimal(num, base) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / base);
        count++;
    }
    return count;
}

console.log(numberOfDigitsOptimal(6, 10)); // 1 digit in base 10
console.log(numberOfDigitsSuboptimal(6, 2)); // 3 digits in base 2 (110)