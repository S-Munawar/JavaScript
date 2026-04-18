/**
 * Question: Find the square root of a number with given precision.
 * Description: Uses binary search to find the integer part of the square root, then incrementally adds decimal parts up to 'p' precision.
 * Time Complexity: O(log(n) + p) where n is the given number and p is the precision
 * Space Complexity: O(1)
 */
function squareRoot(n, p) {
    
    let l = 0
    let r = n
    let res = 0

    while(l <= r) {

        let mid = Math.floor((l + r) / 2)

        if(mid * mid === n) {
            return mid
        } 

        if(mid * mid < n) {
            l = mid + 1
            res = mid
        }
        else {
            r = mid - 1
        }

    }

    let inc = 0.1
    while(p > 0) {

        for(let i = inc; i < 1; i += inc) {

            let pValue = res + i
            if(pValue * pValue <= n) {
                res = pValue
            }
        }

        inc = inc / 10
        p--

    }

    return res

}

console.log(squareRoot(3, 1))  // 1.7
console.log(squareRoot(2, 3))  // 1.414
console.log(squareRoot(36, 3))  // 6

