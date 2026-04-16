/**
 * 169. Majority Element
 * 
 * Given an array nums of size n, return the majority element.
 * 
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

const nums1 = [3,2,3]
const nums2 = [2,2,1,1,1,2,2]

// Brute Force
// Time complexity: O(n^2) where n is the length of array nums (nested loop to count frequency of each element)
// Space complexity: O(1) (no extra memory)
function majorityElement1(nums) {
    let n = nums.length
    for(let i = 0; i < n; i++) {
        let count = 0
        for(let j = 0; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                count++
            }
        }
        if(count > Math.floor(n/2)) {
            return nums[i]
        }
    } 
    return -1
}

// Sorting
// Time complexity: O(n log n) where n is the length of array nums (sorting the array)
// Space complexity: O(1) or O(n) where n is the length of array nums (depending on sorting algorithm used)
function majorityElement2(nums) {
    // Copy to avoid modifying the original array out of turn in test environment
    const sortedNums = nums.slice().sort((a, b) => a - b)
    let middle = Math.floor(sortedNums.length/2)
    return sortedNums[middle]
}

// Hash Map
// Time complexity: O(n) where n is the length of array nums (single pass through array)
// Space complexity: O(n) where n is the length of array nums (map stores up to n/2 elements)
function majorityElement3(nums) {
    let count = new Map()
    let maxCount = 0
    let res = -1;
    for (const num of nums) {
        count.set(num, ((count.get(num) | 0) + 1))
        if (maxCount < count.get(num)) {
            maxCount = count.get(num)
            res = num
        }
    }
    return res
}

// Randomization
// Time complexity: Expected O(n), Worst case O(∞) where n is the length of array nums
// Space complexity: O(1)
function majorityElement4(nums) {
    const n = nums.length;
    while(true) {
        let count = 0
        let candidate = nums[Math.floor(Math.random()*n)]
        for(const num of nums) {
            if(num === candidate) {
                count++
            }
            if(count > Math.floor(n/2)) {
                return candidate
            }
        }
    }
}

// Boyer-Moore Voting Algorithm
// Time complexity: O(n) where n is the length of array nums (single pass through array)
// Space complexity: O(1) (requires only two variables)
function majorityElement5(nums) {
    let count = 0;
    let candidate = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

console.log("Brute Force:")
console.log(majorityElement1([...nums1]))
console.log(majorityElement1([...nums2]))

console.log("\nSorting:")
console.log(majorityElement2([...nums1]))
console.log(majorityElement2([...nums2]))

console.log("\nHash Map:")
console.log(majorityElement3([...nums1]))
console.log(majorityElement3([...nums2]))

console.log("\nRandomization:")
console.log(majorityElement4([...nums1]))
console.log(majorityElement4([...nums2]))

console.log("\nBoyer-Moore Voting Algorithm:")
console.log(majorityElement5([...nums1]))
console.log(majorityElement5([...nums2]))