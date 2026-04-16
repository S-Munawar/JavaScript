/**
 * 27. Remove Element
 * 
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 */

const nums1 = [3,2,2,3]
const val1 = 3

const nums2 = [0,1,2,2,3,0,4,2]
const val2 = 2

// Two Pointers - II
// Time complexity: O(n) where n is the length of array nums (single pass through array, fewer writes if elements to remove are rare)
// Space complexity: O(1) (modifies array in-place)
function removeElement3(nums, val) { 
    let n = nums.length
    let i = 0
    while(i < n) {
        if(nums[i] === val) {
            nums[i] = nums[--n]
        }
        else{
            i++
        }
    }
    return n
}

// Two Pointers - I
// Time complexity: O(n) where n is the length of array nums (single pass through array)
// Space complexity: O(1) (modifies array in-place)
function removeElement2(nums, val) { 
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

// Brute Force
// Time complexity: O(n) where n is the length of array nums (iterating through the array twice)
// Space complexity: O(n) where n is the length of array nums (creates an additional temp array of size up to n)
function removeElement1(nums, val) {
    const tmp = [];
    for (const num of nums) {
        if (num !== val) {
            tmp.push(num);
        }
    }
    for (let i = 0; i < tmp.length; i++) {
        nums[i] = tmp[i];
    }
    return tmp.length;
}

console.log("Two Pointers - II:")
console.log(removeElement3([...nums1], val1))
console.log(removeElement3([...nums2], val2))

console.log("\nTwo Pointers - I:")
console.log(removeElement2([...nums1], val1))
console.log(removeElement2([...nums2], val2))

console.log("\nBrute Force:")
console.log(removeElement1([...nums1], val1))
console.log(removeElement1([...nums2], val2))