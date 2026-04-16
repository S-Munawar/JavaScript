/**
 * Question: Sort an array using Bubble Sort algorithm.
 * Description: Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
 */

/**
 * Solution: Swapped Check Optmiziation
 * Description: Iterates through the list continuously pushing the largest element to the end. The `swapped` tracking variable allows best-case O(n) shortcut if array is already sorted.
 * Time Complexity: O(n^2) (Best Case O(n))
 * Space Complexity: O(1)
 */
function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        // Optimization: if we wanted we could shorten loop length each pass, but keeping simple
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)
    return arr;
}

let arr1 = [-6, 20, 8, -2, 4];
console.log(bubbleSort(arr1)); // [-6, -2, 4, 8, 20]