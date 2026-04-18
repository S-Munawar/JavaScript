/**
 * 75. Sort Colors
 * 
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
 * with the colors in the order red, white, and blue.
 * 
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * 
 * You must solve this problem without using the library's sort function.
 */

const nums1 = [2,0,2,1,1,0]
const nums2 = [2,0,1]

// Three Pointers - I (Dutch National Flag)
// Optimal: true one-pass with swapping elements directly.
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(1)
function sortColors1(nums) {
    let i = 0,
        l = 0,
        r = nums.length - 1;
    while (i <= r) {
        if (nums[i] == 0) {
            [nums[l], nums[i]] = [nums[i], nums[l]];
            l++;
        } else if (nums[i] == 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--;
            i--;
        }
        i++;
    }
    return nums;
}

// Three Pointers - III (Streamlined Cascading Write)
// Streamlined boundary insertion array overwriting.
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(1)
function sortColors2(nums) {
    let zero = 0,
        one = 0;
    for (let two = 0; two < nums.length; two++) {
        let tmp = nums[two];
        nums[two] = 2;
        if (tmp < 2) {
            nums[one++] = 1;
        }
        if (tmp < 1) {
            nums[zero++] = 0;
        }
    }
    return nums;
}

// Three Pointers - II (Detailed Cascading Write)
// Cascading insertion with explicit condition handling.
// Time complexity: O(n) where n is the length of array nums
// Space complexity: O(1)
function sortColors3(nums) {
    let zero = 0,
        one = 0,
        two = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums[two++] = 2;
            nums[one++] = 1;
            nums[zero++] = 0;
        } else if (nums[i] == 1) {
            nums[two++] = 2;
            nums[one++] = 1;
        } else {
            nums[two++] = 2;
        }
    }
    return nums;
}

// Counting Sort
// Time complexity: O(n) where n is the length of array nums (two passes)
// Space complexity: O(1) array of size 3 is fixed extra space constraint
function sortColors4(nums) {
    const count = new Int32Array(3);
    for (let num of nums) {
        count[num]++;
    }

    let index = 0;
    for (let i = 0; i < 3; i++) {
        while (count[i]-- > 0) {
            nums[index++] = i;
        }
    }
    return nums;
}

// Built-in Sort
// Time complexity: O(n log n) where n is the length of array nums
// Space complexity: O(1) or O(n) depending on the sorting algorithm implementation
function sortColors5(nums) {
    nums.sort((a, b) => a - b);
    return nums;
}


console.log("Three Pointers - I (Dutch National Flag):")
console.log(sortColors1([...nums1]))
console.log(sortColors1([...nums2]))

console.log("\nThree Pointers - III (Streamlined Cascading Write):")
console.log(sortColors2([...nums1]))
console.log(sortColors2([...nums2]))

console.log("\nThree Pointers - II (Detailed Cascading Write):")
console.log(sortColors3([...nums1]))
console.log(sortColors3([...nums2]))

console.log("\nCounting Sort:")
console.log(sortColors4([...nums1]))
console.log(sortColors4([...nums2]))

console.log("\nBuilt-in Sort:")
console.log(sortColors5([...nums1]))
console.log(sortColors5([...nums2]))
