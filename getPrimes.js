/**
 * Find prime numbers from an array of numbers
 * 
 * @param {*} arr 
 * @returns array
 */
function getPrimes(arr) {
    arr.sort((a, b) => (b - a));

    const isPrimeNumber = function(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        
        return num > 1;
    };
    
    primes = arr.filter(function(num) {
        return isPrimeNumber(num);
    });
    
    return primes || [];
}

var startTime = performance.now();
var getPrimes = getPrimes([89, 16, 2, 87, 47, 6, 55, 97]);
var endTime = performance.now();

console.log(`${getPrimes} executed for ${(endTime - startTime).toFixed(3)}ms`);