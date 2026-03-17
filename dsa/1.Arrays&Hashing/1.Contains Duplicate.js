const nums1 = [1, 2, 3, 4]
const nums2 = [1, 2, 3, 3]

// Brute Force
// Time complexity: O(n^2) (nested loops comparing each element)
// Space complexity: O(1) (no extra memory required)
function hasDuplicate1(nums) {
    let hasDuplicate = false
        const len = nums.length
        for(let i = 0; i < len - 1; i++) {
            for(let j = i + 1; j < len; j++) {
                if(nums[i] === nums[j]) {
                    hasDuplicate = true
                    break
                }
            }
            if(hasDuplicate) {
                break;
            }
        }
        return hasDuplicate
}

// Sorting
// Time complexity: O(n log n) (sorting the array)
// Space complexity: O(1) or O(n) (depending on the sorting algorithm)
function hasDuplicate2(nums) {
        const sortedArr = nums.sort((a, b) => a - b)
        const length = sortedArr.length
        for(let i = 0; i < length - 1; i++) {
            if (sortedArr[i] === sortedArr[i+1]) {
                return true
            }
        }
        return false
    }

// Hash Map
// Time complexity: O(n) (single pass through array)
// Space complexity: O(n) (up to n elements stored in map)
function hasDuplicate3(nums) {
        let map = new Map()
        const len = nums.length
        for(const key of nums) {
            map[key] = (map[key] | 0) + 1
            if(map[key] > 1) {
                return true
            }
        }
        return false
    }

// Hash Set Length
// Time complexity: O(n) (creating Set takes O(n) time)
// Space complexity: O(n) (Set stores up to n elements)
function hasDuplicate4(nums) {
        return new Set(nums).size < nums.length
    }

// Hash Set  
// Time complexity: O(n) (single pass through array)
// Space complexity: O(n) (Set stores up to n elements)
function hasDuplicate5(nums) {
        let seen = new Set()
        for(const num of nums) {
            if(seen.has(num)) {
                return true
            }
            seen.add(num)
        }
        return false
    }


console.log(hasDuplicate1(nums2))
console.log(hasDuplicate2(nums2))
console.log(hasDuplicate3(nums2))
console.log(hasDuplicate4(nums2))
console.log(hasDuplicate5(nums2))