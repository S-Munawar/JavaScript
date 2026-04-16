/**
 * Question: Determine if a given positive integer is a prime number.
 * Description: A prime number is considered to be a positive integer greater than 1 that has no positive divisors other than 1 and itself.
 */

/**
 * Optimal Solution: Square Root Limit Check
 * Description: A larger factor of n must be a multiple of a smaller factor that has been already checked if we check up to sqrt(n).
 * Time Complexity: O(√n)
 * Space Complexity: O(1)
 */
function primeOptimal(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Suboptimal Solution: Brute Force Limit Check
 * Description: Running up to n-1 individually testing all remainders. 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function primeSuboptimal(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(primeOptimal(2)) // true
console.log(primeSuboptimal(2)) // true