/**
 * 242. Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 */
const s1 = "shaik"
const t1 = "kiahs"

const s2 = "abdul"
const t2 = "munar"

// Hash Table (Using Array)
// Time complexity: O(n + m) (iterating through the strings)
// Space complexity: O(1) (array size is fixed at 26 characters)
function isAnagram3(s, t) {
    if (s.length !== t.length) return false
    let arr = new Array(26).fill(0)
    for(let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--
    }
    return arr.every((val) => val === 0)
}

// Hash Map
// Time complexity: O(n + m) (iterating through both strings where n and m are lengths)
// Space complexity: O(1) (since map size is capped at 26 characters)
function isAnagram2(s, t) {
    if (s.length !== t.length) return false
    const length = s.length
    let str1 = new Map()
    let str2 = new Map()
    for(let i = 0; i < length; i++) {
        str1[s[i]] = (str1[s[i]] | 0) + 1
        str2[t[i]] = (str2[t[i]] | 0) + 1
    }
    for(const ch in str1) {
        if (str1[ch] !== str2[ch]) {
            return false
        }
    }
    return true
}

// Sorting
// Time complexity: O(n log n + m log m) (sorting both strings dominates)
// Space complexity: O(n + m) (creating arrays for splitting strings)
function isAnagram1(s, t) {
    if (s.length !== t.length) return false
    const sortedS = s.split('').sort().join()
    const sortedT = t.split('').sort().join()
    return sortedS == sortedT
}

console.log("Hash Table (Using Array):")
console.log(isAnagram3(s2, t2))

console.log("\nHash Map:")
console.log(isAnagram2(s2, t2))

console.log("\nSorting:")
console.log(isAnagram1(s2, t2))