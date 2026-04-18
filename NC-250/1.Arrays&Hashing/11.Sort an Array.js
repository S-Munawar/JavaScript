/**
 * 912. Sort an Array
 * 
 * Given an array of integers nums, sort the array in ascending order and return it.
 * 
 * You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.
 */

const nums1 = [5, 2, 3, 1]
const nums2 = [5, 1, 1, 2, 0, 0]

// Radix Sort
// Time complexity: O(d * (n + b)) where d is the number of digits, b is base (10)
// Space complexity: O(n + b) for output arrays and counters
function sortArray1(nums) {
    function countSort(arr, d) {
        const count = Array(10).fill(0);
        for (const num of arr) {
            count[Math.floor(num / d) % 10]++;
        }
        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        const res = Array(arr.length);
        for (let i = arr.length - 1; i >= 0; i--) {
            const idx = Math.floor(arr[i] / d) % 10;
            res[count[idx] - 1] = arr[i];
            count[idx]--;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = res[i];
        }
    }

    function radixSort(arr) {
        const maxElement = Math.max(...arr);
        let d = 1;

        while (Math.floor(maxElement / d) > 0) {
            countSort(arr, d);
            d *= 10;
        }
    }

    const negatives = nums.filter((num) => num < 0).map((num) => -num);
    const positives = nums.filter((num) => num >= 0);

    if (negatives.length > 0) {
        radixSort(negatives);
        negatives.reverse();
        for (let i = 0; i < negatives.length; i++) {
            negatives[i] = -negatives[i];
        }
    }

    if (positives.length > 0) {
        radixSort(positives);
    }

    return [...negatives, ...positives];
}

// Counting Sort
// Time complexity: O(n + k) where n is the length of array nums and k is the range of elements
// Space complexity: O(n) for the map to store counts
function sortArray2(nums) {
    function countingSort(arr) {
        let count = new Map();
        let minVal = Math.min(...arr);
        let maxVal = Math.max(...arr);

        arr.forEach((val) => {
            if (!count.has(val)) {
                count.set(val, 0);
            }
            count.set(val, count.get(val) + 1);
        });

        let index = 0;
        for (let val = minVal; val <= maxVal; val += 1) {
            while (count.get(val) > 0) {
                arr[index] = val;
                index += 1;
                count.set(val, count.get(val) - 1);
            }
        }
    }

    countingSort(nums);
    return nums;
}

// Heap Sort
// Time complexity: O(n log n)
// Space complexity: O(log n) for recursive call stack during heapify
function sortArray3(nums) {
    function heapify(arr, n, i) {
        let l = (i << 1) + 1;
        let r = (i << 1) + 2;
        let largestNode = i;

        if (l < n && arr[l] > arr[largestNode]) {
            largestNode = l;
        }

        if (r < n && arr[r] > arr[largestNode]) {
            largestNode = r;
        }

        if (largestNode !== i) {
            [arr[i], arr[largestNode]] = [arr[largestNode], arr[i]];
            heapify(arr, n, largestNode);
        }
    }

    function heapSort(arr) {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
        }
    }

    heapSort(nums);
    return nums;
}

// Merge Sort
// Time complexity: O(n log n) 
// Space complexity: O(n) for temporary arrays used during merge
function sortArray4(nums) {
    function merge(arr, l, m, r) {
        let temp = [];
        let i = l,
            j = m + 1;

        while (i <= m && j <= r) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i++]);
            } else {
                temp.push(arr[j++]);
            }
        }

        while (i <= m) temp.push(arr[i++]);
        while (j <= r) temp.push(arr[j++]);

        for (let i = l; i <= r; i++) {
            arr[i] = temp[i - l];
        }
    }

    function mergeSort(arr, l, r) {
        if (l >= r) return;
        let m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }

    mergeSort(nums, 0, nums.length - 1);
    return nums;
}

// Quick Sort
// Time complexity: O(n log n) average, O(n^2) worst case
// Space complexity: O(log n) average for call stack
function sortArray5(nums) {
    function partition(left, right) {
        const mid = (left + right) >> 1;
        [nums[mid], nums[left + 1]] = [nums[left + 1], nums[mid]];

        if (nums[left] > nums[right])
            [nums[left], nums[right]] = [nums[right], nums[left]];
        if (nums[left + 1] > nums[right])
            [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
        if (nums[left] > nums[left + 1])
            [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];

        const pivot = nums[left + 1];
        let i = left + 1;
        let j = right;

        while (true) {
            while (nums[++i] < pivot);
            while (nums[--j] > pivot);
            if (i > j) break;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }

        nums[left + 1] = nums[j];
        nums[j] = pivot;
        return j;
    }

    function quickSort(left, right) {
        if (right <= left + 1) {
            if (right == left + 1 && nums[right] < nums[left])
                [nums[left], nums[right]] = [nums[right], nums[left]];
            return;
        }

        const j = partition(left, right);
        quickSort(left, j - 1);
        quickSort(j + 1, right);
    }

    quickSort(0, nums.length - 1);
    return nums;
}

// Shell Sort
// Time complexity: O(n^2) worst case with Shell's original gap sequence, but often faster in practice
// Space complexity: O(1)
function sortArray6(nums) {
    const n = nums.length;
    if (n === 1) return nums;

    const shellSort = () => {
        let gap = Math.floor(n / 2);
        while (gap >= 1) {
            for (let i = gap; i < n; i++) {
                let key = nums[i];
                let j = i - gap;
                while (j >= 0 && nums[j] > key) {
                    nums[j + gap] = nums[j];
                    j -= gap;
                }
                nums[j + gap] = key;
            }
            gap = Math.floor(gap / 2);
        }
    };

    shellSort();
    return nums;
}

console.log("Radix Sort:")
console.log(sortArray1([...nums1]))
console.log(sortArray1([...nums2]))

console.log("\nCounting Sort:")
console.log(sortArray2([...nums1]))
console.log(sortArray2([...nums2]))

console.log("\nHeap Sort:")
console.log(sortArray3([...nums1]))
console.log(sortArray3([...nums2]))

console.log("\nMerge Sort:")
console.log(sortArray4([...nums1]))
console.log(sortArray4([...nums2]))

console.log("\nQuick Sort:")
console.log(sortArray5([...nums1]))
console.log(sortArray5([...nums2]))

console.log("\nShell Sort:")
console.log(sortArray6([...nums1]))
console.log(sortArray6([...nums2]))
