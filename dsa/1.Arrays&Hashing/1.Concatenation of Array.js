/**
 * 1929. Concatenation of Array
 * 
 * Given an integer array nums of length n, you want to create an array ans of length 2n 
 * where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 * Return the array ans.
 */

const nums1 = [1,4,1,2]
const nums2 = [22,21,20,1]

// Iteration (One Pass)
// Time complexity: O(n) (iterates through array exactly once)
// Space complexity: O(n) (creates array of size 2n)
function getConcatenation2(nums) {
    let arr = []
    const len = nums.length
    for (let i = 0; i < len; i++) {
        arr[i] = arr[i + len] = nums[i]
    }
    return arr
}

// Iteration (Two Pass)
// Time complexity: O(n) (iterates array twice which simplifies to O(n))
// Space complexity: O(n) (creates array of size 2n)
function getConcatenation1(nums) {
    let ans = [];
    for (let i = 0; i < 2; i++) {
        for (let num of nums) {
            ans.push(num);
        }
    }
    return ans;
}

console.log("Iteration (One Pass):")
console.log(getConcatenation2(nums1))

console.log("\nIteration (Two Pass):")
console.log(getConcatenation1(nums1))