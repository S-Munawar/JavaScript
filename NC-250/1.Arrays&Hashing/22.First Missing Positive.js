/**
 * 41. First Missing Positive
 * 
 * Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
 * 
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 */

const nums1 = [1,2,0]
const nums2 = [3,4,-1,1]
const nums3 = [7,8,9,11,12]

// Cycle Sort (Optimal)
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(1)
function firstMissingPositive1(nums) {
    let n = nums.length;
    let i = 0;
    while (i < n) {
        if (nums[i] <= 0 || nums[i] > n) {
            i++;
            continue;
        }
        let index = nums[i] - 1;
        if (nums[i] != nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }

    return n + 1;
}

// Negative Marking
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(1)
function firstMissingPositive2(nums) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] < 0) {
            nums[i] = 0;
        }
    }

    for (let i = 0; i < n; i++) {
        const val = Math.abs(nums[i]);
        if (val >= 1 && val <= n) {
            if (nums[val - 1] > 0) {
                nums[val - 1] *= -1;
            } else if (nums[val - 1] === 0) {
                nums[val - 1] = -1 * (n + 1);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        if (nums[i - 1] >= 0) {
            return i;
        }
    }

    return n + 1;
}

// Boolean Array
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(n) auxiliary boolean array
function firstMissingPositive3(nums) {
    const n = nums.length;
    const seen = new Array(n).fill(false);

    for (const num of nums) {
        if (num > 0 && num <= n) {
            seen[num - 1] = true;
        }
    }

    for (let i = 0; i < n; i++) {
        if (!seen[i]) {
            return i + 1;
        }
    }

    return n + 1;
}

// Sorting
// Time complexity: O(n log n) where n is the length of array nums 
// Space complexity: O(1) or O(n) depending on the sorting algorithm implementation.
function firstMissingPositive4(nums) {
    nums.sort((a, b) => a - b);
    let missing = 1;
    for (const num of nums) {
        if (num > 0 && missing === num) {
            missing++;
        }
    }
    return missing;
}

// Brute Force
// Time complexity: O(n^2) where n is the length of array nums 
// Space complexity: O(1)
function firstMissingPositive5(nums) {
    let missing = 1;
    while (true) {
        let flag = true;
        for (let num of nums) {
            if (missing === num) {
                flag = false;
                break;
            }
        }
        if (flag) return missing;
        missing++;
    }
}


console.log("Cycle Sort (Optimal):")
console.log(firstMissingPositive1([...nums1]))
console.log(firstMissingPositive1([...nums2]))
console.log(firstMissingPositive1([...nums3]))

console.log("\nNegative Marking:")
console.log(firstMissingPositive2([...nums1]))
console.log(firstMissingPositive2([...nums2]))
console.log(firstMissingPositive2([...nums3]))

console.log("\nBoolean Array:")
console.log(firstMissingPositive3([...nums1]))
console.log(firstMissingPositive3([...nums2]))
console.log(firstMissingPositive3([...nums3]))

console.log("\nSorting:")
console.log(firstMissingPositive4([...nums1]))
console.log(firstMissingPositive4([...nums2]))
console.log(firstMissingPositive4([...nums3]))

console.log("\nBrute Force:")
console.log(firstMissingPositive5([...nums1]))
console.log(firstMissingPositive5([...nums2]))
console.log(firstMissingPositive5([...nums3]))