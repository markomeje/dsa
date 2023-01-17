
/**
 * Sieve Of Eratosthenes algorithm 
 * Find prime numbers
 * 
 * @param {*} num 
 * @returns array
 */
function sieveOfEratosthenes(num) {
    var primes = [];
    /**
     * Mark all values from zero to num as true
     * Assume all as prime
     */
    for (let i = 0; i <= num; i++) {
        primes[i] = true;
    }

    /**
     * Numbers less than or equal to one are not primes
     * So mark them as false;
     */
    primes[0] = false;
    primes[1] = false;

    /**
     * x = 2
        Math.sqrt(20) = Math.floor(4.4)
        x = 3
        x = 4
        SO loop goes only four times as opposed to looping from 2 to 20 
     */
    var sqrtOfNum = Math.sqrt(num);
    for (let x = 2; x <= Math.floor(sqrtOfNum); x++) {
        for (let y = 2; x * y <= num; y++) {
            primes[x * y] = false;
        }
    }

    results = [];
    for (let j = 0; j <= primes.length; j++) {
        if (primes[j]) {
            results.push(j);
        }
    }

    return results;
}

console.log(sieveOfEratosthenes(20));