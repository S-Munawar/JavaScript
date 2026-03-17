/**
 * 49. Group Anagrams
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 */

const strs1 = ["eat","tea","tan","ate","nat","bat"]

// Hash Table (Character Count)
// Time complexity: O(m * n) (iterating through each character of all m strings)
// Space complexity: O(m) (map stores up to m entries, character array is fixed size O(1))
function groupAnagrams2(strs) {
    const res = {}
    for(const s of strs) {
        let count = new Array(26).fill(0)
        for(const ch of s) {
            count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        const key = count.join(',')
        if (!res[key]) {
            res[key] = []
        }
        res[key].push(s)
    }
    return Object.values(res)
}

// Sorting
// Time complexity: O(m * n log n) (where m is the number of strings and n is the length of the longest string)
// Space complexity: O(m * n) (for storing the strings in a map)
function groupAnagrams1(strs) {
    let res = {}
    for(const s of strs) {
        let sortedS = s.split("").sort().join()
        if(!res[sortedS]) {
            res[sortedS] = []
        }
        res[sortedS].push(s)
    }
    return Object.values(res)
}

console.log("Hash Table (Character Count):")
console.log(groupAnagrams2(strs1))

console.log("\nSorting:")
console.log(groupAnagrams1(strs1))