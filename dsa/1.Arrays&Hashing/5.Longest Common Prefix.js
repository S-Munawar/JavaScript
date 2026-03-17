/**
 * 14. Longest Common Prefix
 * 
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

const str1 = ["bat","bag","bank","band"]
const str2 = ["dance","dag","danger","damage"]
const str3 = ["neet","feet"]


// Vertical Scaling (Shortest String Prefix)
// Time complexity: O(n * m) (where n is the number of strings and m is the length of the shortest string)
// Space complexity: O(1) (only stores the prefix string)
function longestCommonPrefix4(strs) {
    let str = ""
    let smallestString = strs.reduce((s, curr) => 
    s.length < curr.length ? s : curr)
    let len = smallestString.length
    for(let i = 0; i < len; i++) {
        let prefix = true
        for(let j = 0; j < strs.length; j++) {
            if(smallestString[i] !== strs[j][i]) {
                prefix = false
                break
            }
        }
        if(!prefix) {
            break
        }
        else{
            str += smallestString[i]
        }
    }
    return str
}

// Vertical Scaling (First String Prefix)
// Time complexity: O(n * m) (checking up to m characters for all n strings)
// Space complexity: O(1) (only keeping track of the prefix)
function longestCommonPrefix3(strs) {
    let prefix = strs[0]
    for(let i = 0; i < prefix.length; i++) {
        for(let s of strs) {
            if(prefix[i] !== s[i]) {
                return prefix.slice(0, i)
            }
        }
    }
    return prefix
}

// Horizontal Scaling
// Time complexity: O(n * m) (iterating up to m characters per string across n strings)
// Space complexity: O(1) (modifying the prefix variable in place)
function longestCommonPrefix2(strs) {
    let prefix = strs[0]
    for(let i = 0; i < strs.length; i++) {
        for(let j = 0; j < prefix.length; j++) {
            if(prefix[j] !== strs[i][j]) {
                prefix = prefix.slice(0, j)
                break
            }
        }
    }
    return prefix
}

// Sorting
// Time complexity: O(n * m log n) (sorting n strings of max length m)
// Space complexity: O(1) or O(n * m) (depending on the sorting algorithm)
function longestCommonPrefix1(strs) {
    if (strs.length === 1) {
        return strs[0];
    }
    strs.sort()
    let minLenght = Math.min(strs[0].length, strs[strs.length - 1].length)
    for(let i = 0; i < minLenght; i++) {
        if(strs[0][i] !== strs[strs.length - 1][i]) {
            return strs[0].slice(0, i)
        }
    }
    return strs[0]
}

console.log("Vertical Scaling (Shortest String Prefix):")
console.log(longestCommonPrefix4(str1))

console.log("\nVertical Scaling (First String Prefix):")
console.log(longestCommonPrefix3(str1))

console.log("\nHorizontal Scaling:")
console.log(longestCommonPrefix2(str1))

console.log("\nSorting:")
console.log(longestCommonPrefix1(str1))