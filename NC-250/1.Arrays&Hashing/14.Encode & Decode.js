/**
 * 271. Encode and Decode Strings
 * 
 * Design an algorithm to encode a list of strings to a string. 
 * The encoded string is then sent over the network and is decoded back to the original list of strings.
 * 
 * Please implement encode and decode.
 */

const strs1 = ["neet","code","love","you"]
const strs2 = ["we","say",":","yes","!@#$%^&*()"]

// Length Prefixing (Optimal)
// Time complexity: O(m) where m is the sum of lengths of all the strings
// Space complexity: O(m + n) for each encode and decode call where n is the number of strings
function encode1(strs) {
    let res = '';
    for (let s of strs) {
        res += s.length + '#' + s;
    }
    return res;
}

function decode1(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
        let j = i;
        while (str[j] !== '#') {
            j++;
        }
        let length = parseInt(str.substring(i, j));
        i = j + 1;
        j = i + length;
        res.push(str.substring(i, j));
        i = j;
    }
    return res;
}

// Header Length Prefixing
// Time complexity: O(m) where m is the sum of lengths of all the strings
// Space complexity: O(m + n) for each encode and decode call where n is the number of strings
function encode2(strs) {
    if (strs.length === 0) return '';
    let sizes = [],
        res = '';
    for (let s of strs) {
        sizes.push(s.length);
    }
    for (let sz of sizes) {
        res += sz + ',';
    }
    res += '#';
    for (let s of strs) {
        res += s;
    }
    return res;
}

function decode2(str) {
    if (str.length === 0) return [];
    let sizes = [],
        res = [],
        i = 0;
    while (str[i] !== '#') {
        let cur = '';
        while (str[i] !== ',') {
            cur += str[i];
            i++;
        }
        sizes.push(parseInt(cur));
        i++;
    }
    i++;
    for (let sz of sizes) {
        res.push(str.substr(i, sz));
        i += sz;
    }
    return res;
}


console.log("Length Prefixing (Optimal):")
let encoded1_1 = encode1([...strs1])
console.log("Encoded: ", encoded1_1)
console.log("Decoded: ", decode1(encoded1_1))

let encoded1_2 = encode1([...strs2])
console.log("Encoded: ", encoded1_2)
console.log("Decoded: ", decode1(encoded1_2))


console.log("\nHeader Length Prefixing:")
let encoded2_1 = encode2([...strs1])
console.log("Encoded: ", encoded2_1)
console.log("Decoded: ", decode2(encoded2_1))

let encoded2_2 = encode2([...strs2])
console.log("Encoded: ", encoded2_2)
console.log("Decoded: ", decode2(encoded2_2))