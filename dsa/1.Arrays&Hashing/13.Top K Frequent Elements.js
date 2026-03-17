/**
 * 347. Top K Frequent Elements
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * You may return the answer in any order.
 */

const nums1 = [1,1,1,2,2,3]
const k1 = 2

const nums2 = [1]
const k2 = 1

// Bucket Sort
// Time complexity: O(n) (counting frequencies and bucketing takes O(n))
// Space complexity: O(n) (hash map and frequency array take up to O(n) space)
function topKFrequent(nums, k) {
    const count = {};
    const freq = new Array(nums.length + 1).fill(null).map(() => [])

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

// Hash Map & Sorting
// Time complexity: O(n log n) (counting is O(n), sorting takes up to O(n log n))
// Space complexity: O(n) (hash map stores up to n unique elements)
function topKFrequent2(nums, k) {
    let count = {}

    for(const num of nums) {
        count[num] = (count[num] | 0) + 1
    }
    const sortedArr = Object.keys(count).sort((a, b) => count[b] - count[a])
    return sortedArr.slice(0, k).map(Number)
}

// Brute Force Counting
// Time complexity: O(n^2) (nested loops to count frequencies)
// Space complexity: O(n) (hash map to store counts)
function topKFrequent1(nums, k) {
    let res = {}
    for(let i = 0; i < nums.length; i++) {
        res[nums[i]] = (res[nums[i]] | 0)
        for(let j = 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                res[nums[i]]++
            }
        }
    }
    const keys = Object.keys(res).sort((a, b) => res[b] - res[a])
    let Output = []
    for(let i = 0; i < k; i++){
        Output.push(Number(keys[i]))
    }
    return Output
}

console.log("Bucket Sort:")
console.log(topKFrequent(nums1, k1))
console.log(topKFrequent(nums2, k2))

console.log("\nHash Map & Sorting:")
console.log(topKFrequent2(nums1, k1))
console.log(topKFrequent2(nums2, k2))

console.log("\nBrute Force:")
console.log(topKFrequent1(nums1, k1))
console.log(topKFrequent1(nums2, k2))

