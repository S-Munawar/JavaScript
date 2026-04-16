/**
 * Question: Sort an array using Insertion Sort algorithm.
 * Description: Builds the final sorted array one item at a time by taking elements and inserting them into their correct position among previously sorted elements.
 */

/**
 * Solution: Nested Sorted Insertion
 * Description: Iterates starting from index 1. Stores the target value and shifts all preceding greater elements to the right. Finally writes target into the found gap.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = numberToInsert;
    }
    return arr;
}

let arr1 = [-6, 20, 8, -7, 4];
console.log(insertionSort(arr1)); // [-7, -6, 4, 8, 20]