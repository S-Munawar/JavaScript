const nums1 = [1, 2, 3, 4]
const target1 = 5

const nums2 = [2, 4, 6, 8]
const target2 = 10

// Brute Force
// Time complexity: O(n^2) (nested loops iterate over the array)
// Space complexity: O(1) (no extra memory used)
function twoSum1(nums, target) {
        const length = nums.length

        for(let i = 0; i < length - 1; i++) {
            for(let j = i + 1; j < length; j++) {
                if(nums[i] + nums[j] === target) {
                    return [i, j]
                }
            }
        }
    }

// Hash Map (One Pass)
// Time complexity: O(n) (single pass through the array)
// Space complexity: O(n) (stores up to n elements in the map)
function twoSum2(nums, target) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]
            if(map.has(diff)) {
                return [i, map.get(diff)]
            }
            map.set(nums[i], i)
        }
        return []
    }

// Hash Map (Two Pass)
// Time complexity: O(n) (two passes over the array)
// Space complexity: O(n) (stores up to n elements in the map)
function twoSum3(nums, target) {
        let map = new Map()
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], i)
        }

        for(let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if(map.has(diff)) {
                return [i, map.get(diff)]
            }
        }
        return []
    }

// Sorting
// Time complexity: O(n log n) (sorting step dominates the time)
// Space complexity: O(n) (extra array created for original indices)
function twoSum4(nums, target) {
        let arr = []
        for(let i = 0; i < nums.length; i++) {
            arr.push([nums[i], i])
        }
        arr.sort((a, b) => a[0] - b[0])

        let i = 0
        let j = arr.length - 1
        while(i < j) {
            let sum = arr[j][0] + arr[i][0]
            if(sum === target) {
                return [Math.min([arr[i][1]], arr[j][1]), Math.max([arr[i][1]], arr[j][1])]
            }
            else if(sum < target) {
                i++
            }
            else {
                j--
            }
        }
        return [];
    }

console.log(twoSum1(nums1, target1))
console.log(twoSum2(nums1, target1))
console.log(twoSum3(nums1, target1))
console.log(twoSum4(nums1, target1))
