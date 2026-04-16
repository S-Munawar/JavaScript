/**
 * Question: Find the sum of the numbers in the nth row of Pascal's Triangle.
 * Note: Assumes 1-based indexing for the rows.
 */

/**
 * Optimal Solution: Bitwise Left Shift
 * Description: The sum of elements in the nth row of Pascal's triangle is always equal to 2^(n-1). We can calculate this in O(1) time using bitwise left shift: `1 << (n-1)`.
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
function pascalRowSumOptimal(row) {
    return 1 << (row - 1);
}

/**
 * Suboptimal Solution: Iterative approach for 2^(row-1)
 * Description: Iteratively multiply by 2 for (row-1) times.
 * Time Complexity: O(row)
 * Space Complexity: O(1)
 */
function pascalRowSumSuboptimal(row) {
    let sum = 1;
    for (let i = 0; i < row - 1; i++) {
        sum *= 2;
    }
    return sum;
}

console.log(pascalRowSumOptimal(5)); // Sum of 5th row is 16
console.log(pascalRowSumSuboptimal(5)); // Sum of 5th row is 16
