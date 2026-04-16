/**
 * Question: Return the Cartesian product of two arrays `A` and `B`.
 * Description: The Cartesian product of two sets A and B is the set of all ordered pairs (a, b) where a is in A and b is in B.
 */

/**
 * Optimal Solution: Nested Iterations
 * Description: Because every element of array 1 must pair with every element of array 2, the most optimal way to implement this algorithm is a nested loop.
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
function cartesian(arr1, arr2) {
    const result = [];
    for (const a of arr1) {
        for (const b of arr2) {
            result.push([a, b]);
        }
    }
    return result;
}

let arr1 = [0, 1];
let arr2 = [5, 6];
console.log(cartesian(arr1, arr2)); // [ [ 0, 5 ], [ 0, 6 ], [ 1, 5 ], [ 1, 6 ] ]