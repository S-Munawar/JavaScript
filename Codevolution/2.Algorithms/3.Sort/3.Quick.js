/**
 * Question: Sort an array using Quick Sort algorithm.
 * Description: Pick a pivot element. Partition the array into two halves - elements less than the pivot and elements greater than the pivot. Repeat recursively.
 */

/**
 * Optimal Solution: Standard Pivot Quick Sort
 * Description: Recursively handles sorting by dividing data around a final-placed pivot. Due to its divide and conquer nature it runs in n(log n) average.
 * Time Complexity: O(n log n) [Worst: O(n^2)]
 * Space Complexity: O(log n)
 */
function quickSortOptimal(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let pivot = arr[arr.length - 1]; // Picking last element
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }

    return [...quickSortOptimal(left), pivot, ...quickSortOptimal(right)];
}

let arr1 = [-6, 20, 8, -2, 4];
console.log(quickSortOptimal(arr1)); // [-6, -2, 4, 8, 20]