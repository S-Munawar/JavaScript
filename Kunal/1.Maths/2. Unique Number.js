/**
 * Question: LeetCode 136. Single Number
 * Description: Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * Optimal Solution: Bitwise XOR
 * Description: XORing a number with itself returns 0 (a ^ a = 0). XORing a number with 0 returns the number itself (a ^ 0 = a). XOR is associative and commutative. Thus, XORing all elements together will cancel out the duplicates, leaving only the unique number.
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function findUniqueOptimal(arr) {
    let unique = 0;
    for (const num of arr) {
        unique ^= num;
    }
    return unique;
}

/**
 * Suboptimal Solution: Hash Set Iteration
 * Description: Use a Hash Set to track seen elements. If an element is seen, remove it from the set. Otherwise, add it. The remaining element in the set is the unique number.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function findUniqueSuboptimal(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) {
            seen.delete(num);
        } else {
            seen.add(num);
        }
    }
    return Array.from(seen)[0];
}

const arr1 = [1, 2, 2, 3, 1];
console.log(findUniqueOptimal(arr1));
console.log(findUniqueSuboptimal(arr1));