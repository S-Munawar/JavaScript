/**
 * Question: LeetCode 704. Binary Search
 * Description: Given an array of integers sorted in ascending order and a target value, write a function to search target. Returns index or -1.
 */

/**
 * Optimal Solution: Iterative Two Pointers
 * Description: Continuously divide the search space in half by comparing the target with the middle element. This avoids adding frames to the call stack.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
function binarySearchOptimal(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

/**
 * Suboptimal Solution: Recursive Divide and Conquer
 * Description: Search recursively by passing updated start/end pointer boundaries to subsequent calls. Leaves a footprint on the call stack.
 * Time Complexity: O(log n)
 * Space Complexity: O(log n)
 */
function recursiveBinarySearchSuboptimal(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return recursiveBinarySearchSuboptimal(arr, target, start, mid - 1);
    } else {
        return recursiveBinarySearchSuboptimal(arr, target, mid + 1, end);
    }
}

let arr1 = [1, 2, 3, 4, 5];
let target1 = 4;
console.log(binarySearchOptimal(arr1, target1)); // 3
console.log(recursiveBinarySearchSuboptimal(arr1, target1)); // 3