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

/**
 * Solution: Sieve of Eratosthenes
 * Description: An algorithm to find all prime numbers up to any given limit by iteratively marking as composite the multiples of each prime.
 * Time Complexity: O(n*log(log(n)))
 * Space Complexity: O(n)
 */
function primeTillN(n) {
    // Handle edge cases where n is less than 2
    if (n < 2) return [];

    let isPrime = new Array(n + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        // Check if the current number is marked as prime
        if (isPrime[i]) {
            // Start marking multiples from i * i
            // Smaller multiples (like i * 2) were already marked by smaller primes
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Collect and return the actual prime numbers
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

console.log(primeTillN(15)) // 
console.log(primeSuboptimal(2)) // true
console.log(primeOptimal(2)) // true
