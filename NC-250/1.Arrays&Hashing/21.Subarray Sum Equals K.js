/**
 * 560. Subarray Sum Equals K
 * 
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

const nums1 = [1, 1, 1], k1 = 2
const nums2 = [1, 2, 3], k2 = 3

// Hash Map (Optimal)
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(n) tracking the mapping counts natively
function subarraySum1(nums, k) {
    let res = 0,
        curSum = 0;
    const prefixSums = new Map();
    prefixSums.set(0, 1);

    for (let num of nums) {
        curSum += num;
        let diff = curSum - k;
        res += prefixSums.get(diff) || 0;
        prefixSums.set(curSum, (prefixSums.get(curSum) || 0) + 1);
    }

    return res;
}

// Brute Force
// Time complexity: O(n^2) looping bounds linearly to capture window combinations
// Space complexity: O(1)
function subarraySum2(nums, k) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum == k) res++;
        }
    }
    return res;
}


console.log("Hash Map (Optimal):")
console.log(subarraySum1([...nums1], k1))
console.log(subarraySum1([...nums2], k2))

console.log("\nBrute Force:")
console.log(subarraySum2([...nums1], k1))
console.log(subarraySum2([...nums2], k2))