
/**
 * Sieve Of Eratosthenes algorithm 
 * Find prime numbers
 * 
 * @param {*} num 
 * @returns array
 */
function sieveOfEratosthenes(num) {
    var primes = [];
    for (let i = 0; i <= num; i++) {
        primes[i] = true;
    }

    primes[0] = false;
    primes[1] = false;

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

var startTime = performance.now();
var sieveOfEratosthenes = sieveOfEratosthenes(20);
var endTime = performance.now();
console.log(`[${sieveOfEratosthenes}] executed for ${(endTime - startTime).toFixed(3)}ms`);