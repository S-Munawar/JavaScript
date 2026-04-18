/**
 * 229. Majority Element II
 * 
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
 */

const nums1 = [3,2,3]
const nums2 = [1]
const nums3 = [1,2]

// Boyer-Moore Voting Algorithm (Optimal)
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(1)
function majorityElement1(nums) {
    const n = nums.length;
    let num1 = -1,
        num2 = -1,
        cnt1 = 0,
        cnt2 = 0;

    for (const num of nums) {
        if (num === num1) {
            cnt1++;
        } else if (num === num2) {
            cnt2++;
        } else if (cnt1 === 0) {
            cnt1 = 1;
            num1 = num;
        } else if (cnt2 === 0) {
            cnt2 = 1;
            num2 = num;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = cnt2 = 0;
    for (const num of nums) {
        if (num === num1) cnt1++;
        else if (num === num2) cnt2++;
    }

    const res = [];
    if (cnt1 > Math.floor(n / 3)) res.push(num1);
    if (cnt2 > Math.floor(n / 3)) res.push(num2);

    return res;
}

// Boyer-Moore Voting Algorithm (Hash Map)
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(1) since output array size will be at most 2.
function majorityElement2(nums) {
    let count = new Map();

    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);

        if (count.size > 2) {
            const newCount = new Map();
            for (const [key, value] of count.entries()) {
                if (value > 1) {
                    newCount.set(key, value - 1);
                }
            }
            count = newCount;
        }
    }

    const res = [];
    for (const [key] of count.entries()) {
        const frequency = nums.filter((num) => num === key).length;
        if (frequency > Math.floor(nums.length / 3)) {
            res.push(key);
        }
    }

    return res;
}

// Frequency Count
// Time complexity: O(n) where n is the length of array nums 
// Space complexity: O(n)
function majorityElement3(nums) {
    const count = new Map();
    for (const num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    const res = [];
    for (const [key, value] of count.entries()) {
        if (value > Math.floor(nums.length / 3)) {
            res.push(key);
        }
    }

    return res;
}

// Sorting
// Time complexity: O(n log n) where n is the length of array nums 
// Space complexity: O(1) or O(n) depending on the sorting algorithm implementation.
function majorityElement4(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    let i = 0;
    while (i < n) {
        let j = i + 1;
        while (j < n && nums[i] === nums[j]) {
            j++;
        }
        if (j - i > Math.floor(n / 3)) {
            res.push(nums[i]);
        }
        i = j;
    }

    return res;
}

// Brute Force with Set
// Time complexity: O(n^2) where n is the length of array nums 
// Space complexity: O(1)
function majorityElement5(nums) {
    const res = new Set();
    for (const num of nums) {
        let count = 0;
        for (const i of nums) {
            if (i === num) count++;
        }
        if (count > Math.floor(nums.length / 3)) {
            res.add(num);
        }
    }
    return Array.from(res);
}


console.log("Boyer-Moore Voting Algorithm (Optimal):")
console.log(majorityElement1([...nums1])) 
console.log(majorityElement1([...nums2]))
console.log(majorityElement1([...nums3]))

console.log("\nBoyer-Moore Voting Algorithm (Hash Map):")
console.log(majorityElement2([...nums1]))
console.log(majorityElement2([...nums2]))
console.log(majorityElement2([...nums3]))

console.log("\nFrequency Count:")
console.log(majorityElement3([...nums1]))
console.log(majorityElement3([...nums2]))
console.log(majorityElement3([...nums3]))

console.log("\nSorting:")
console.log(majorityElement4([...nums1]))
console.log(majorityElement4([...nums2]))
console.log(majorityElement4([...nums3]))

console.log("\nBrute Force with Set:")
console.log(majorityElement5([...nums1]))
console.log(majorityElement5([...nums2]))
console.log(majorityElement5([...nums3]))
