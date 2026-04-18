/**
 * 347. Top K Frequent Elements
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * You may return the answer in any order.
 */

const nums1 = [1,1,1,2,2,3], k1 = 2
const nums2 = [1], k2 = 1

// Bucket Sort
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(n) where n is the length of array nums
function topKFrequent1(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }
    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    }

    const res = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            res.push(n);
            if (res.length === k) {
                return res;
            }
        }
    }
}

// Min-Heap
// Time complexity: O(n log k) where n is the length of array nums
// Space complexity: O(n + k) where n is the array length and k is the target frequency threshold
function topKFrequent2(nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    // Note: MinPriorityQueue is globally provided in LeetCode via @datastructures-js
    const heap = new MinPriorityQueue((x) => x[1]);
    for (const [num, cnt] of Object.entries(count)) {
        heap.enqueue([num, cnt]);
        if (heap.size() > k) heap.dequeue();
    }

    const res = [];
    for (let i = 0; i < k; i++) {
        const [num, cnt] = heap.dequeue();
        res.push(num);
    }
    return res;
}

// Sorting
// Time complexity: O(n log n) where n is the length of array nums
// Space complexity: O(n) where n is the length of array nums
function topKFrequent3(nums, k) {
    const count = {};
    for (const num of nums) {
        count[num] = (count[num] || 0) + 1;
    }

    const arr = Object.entries(count).map(([num, freq]) => [
        freq,
        parseInt(num),
    ]);
    arr.sort((a, b) => b[0] - a[0]);

    return arr.slice(0, k).map((pair) => pair[1]);
}

console.log("Bucket Sort:")
console.log(topKFrequent1([...nums1], k1))
console.log(topKFrequent1([...nums2], k2))

// execution commented out locally to prevent `ReferenceError: MinPriorityQueue is not defined`
// console.log("\nMin-Heap:")
// console.log(topKFrequent2([...nums1], k1))
// console.log(topKFrequent2([...nums2], k2))

console.log("\nSorting:")
console.log(topKFrequent3([...nums1], k1))
console.log(topKFrequent3([...nums2], k2))
