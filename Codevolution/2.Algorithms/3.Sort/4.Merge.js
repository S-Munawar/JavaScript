/**
 * Question: Sort an array using Merge Sort algorithm.
 * Description: A divide and conquer algorithm that splits arrays into halves down to single items, then repeatedly zips them back up in sorted order.
 */

/**
 * Optimal Solution: Split & Merge
 * Description: We recursively halve the array using `.slice()`. The `merge` helper meticulously aligns two ordered arrays into a single combined one safely.
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function mergeSortOptimal(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSortOptimal(left), mergeSortOptimal(right));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

let arr1 = [-6, 20, 8, -2, 4];
console.log(mergeSortOptimal(arr1)); // [-6, -2, 4, 8, 20]