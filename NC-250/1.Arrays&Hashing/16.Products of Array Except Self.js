/**
 * 238. Product of Array Except Self
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

const nums1 = [1,2,3,4]
const nums2 = [-1,1,0,-3,3]

// Prefix & Suffix (Optimal)
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(1) extra space (output array doesn't count towards space complexity here)
function productExceptSelf1(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }

    let postfix = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}

// Prefix & Suffix
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(n) for the separate prefix and suffix tracking arrays
function productExceptSelf2(nums) {
    const n = nums.length;
    const res = new Array(n);
    const pref = new Array(n);
    const suff = new Array(n);

    pref[0] = 1;
    suff[n - 1] = 1;
    for (let i = 1; i < n; i++) {
        pref[i] = nums[i - 1] * pref[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suff[i] = nums[i + 1] * suff[i + 1];
    }
    for (let i = 0; i < n; i++) {
        res[i] = pref[i] * suff[i];
    }
    return res;
}

// Division
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(1) extra space
function productExceptSelf3(nums) {
    let prod = 1;
    let zeroCount = 0;
    for (let num of nums) {
        if (num !== 0) {
            prod *= num;
        } else {
            zeroCount++;
        }
    }

    if (zeroCount > 1) {
        return Array(nums.length).fill(0);
    }

    const res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        if (zeroCount > 0) {
            res[i] = nums[i] === 0 ? prod : 0;
        } else {
            res[i] = prod / nums[i];
        }
    }
    return res;
}

// Brute Force
// Time complexity: O(n^2) where n is the length of array nums
// Space complexity: O(1) extra space
function productExceptSelf4(nums) {
    const n = nums.length;
    const res = new Array(n);

    for (let i = 0; i < n; i++) {
        let prod = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                prod *= nums[j];
            }
        }
        res[i] = prod;
    }
    return res;
}


console.log("Prefix & Suffix (Optimal):")
console.log(productExceptSelf1([...nums1])) 
console.log(productExceptSelf1([...nums2]))

console.log("\nPrefix & Suffix:")
console.log(productExceptSelf2([...nums1]))
console.log(productExceptSelf2([...nums2]))

console.log("\nDivision:")
console.log(productExceptSelf3([...nums1]))
console.log(productExceptSelf3([...nums2]))

console.log("\nBrute Force:")
console.log(productExceptSelf4([...nums1]))
console.log(productExceptSelf4([...nums2]))
