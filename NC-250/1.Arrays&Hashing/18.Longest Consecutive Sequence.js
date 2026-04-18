/**
 * 128. Longest Consecutive Sequence
 * 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * 
 * You must write an algorithm that runs in O(n) time.
 */

const nums1 = [100, 4, 200, 1, 3, 2]
const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

// Hash Map (Optimal)
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(n)
function longestConsecutive1(nums) {
    const mp = new Map();
    let res = 0;

    for (let num of nums) {
        if (!mp.has(num)) {
            mp.set(
                num,
                (mp.get(num - 1) || 0) + (mp.get(num + 1) || 0) + 1,
            );
            mp.set(num - (mp.get(num - 1) || 0), mp.get(num));
            mp.set(num + (mp.get(num + 1) || 0), mp.get(num));
            res = Math.max(res, mp.get(num));
        }
    }
    return res;
}

// Hash Set
// Time complexity: O(n) where n is the length of array nums (each number is checked roughly twice)
// Space complexity: O(n)
function longestConsecutive2(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let num of numSet) {
        // Find if this is the start of a sequence
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}

// Sorting
// Time complexity: O(n log n) where n is the length of array nums 
// Space complexity: O(1) or O(n) depending on the browser's sorting algorithm implementation.
function longestConsecutive3(nums) {
    if (nums.length === 0) {
        return 0;
    }
    nums.sort((a, b) => a - b);

    let res = 0,
        curr = nums[0],
        streak = 0,
        i = 0;

    while (i < nums.length) {
        if (curr !== nums[i]) {
            curr = nums[i];
            streak = 0;
        }
        // Skip over all duplicates of curr
        while (i < nums.length && nums[i] === curr) {
            i++;
        }
        streak++;
        curr++;
        res = Math.max(res, streak);
    }
    return res;
}

// Brute Force
// Time complexity: O(n^2) where n is the length of array nums (starts counting from every single number)
// Space complexity: O(n)
function longestConsecutive4(nums) {
    let res = 0;
    const store = new Set(nums);

    for (let num of nums) {
        let streak = 0,
            curr = num;
        while (store.has(curr)) {
            streak++;
            curr++;
        }
        res = Math.max(res, streak);
    }
    return res;
}

console.log("Hash Map (Optimal):")
console.log(longestConsecutive1([...nums1]))
console.log(longestConsecutive1([...nums2]))

console.log("\nHash Set:")
console.log(longestConsecutive2([...nums1]))
console.log(longestConsecutive2([...nums2]))

console.log("\nSorting:")
console.log(longestConsecutive3([...nums1]))
console.log(longestConsecutive3([...nums2]))

console.log("\nBrute Force:")
console.log(longestConsecutive4([...nums1]))
console.log(longestConsecutive4([...nums2]))
