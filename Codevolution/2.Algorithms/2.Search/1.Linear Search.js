/**
 * Question: Find the index of a target element in an array using Linear Search.
 * Description: Given an array of integers, search algorithms locate a target value within the array. Linear Search is the simplest approach, traversing elements sequentially.
 */

/**
 * Optimal Solution: Standard For-Loop Iteration
 * Description: Traverse from start to end of the array checking if the current element matches the target.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function linearSearchOptimal(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let arr1 = [1, 2, 3, 4, 5]
console.log(linearSearchOptimal(arr1, 5)) // 4