/**
 * Fizzbuzz algorithm
 * 
 * @param {*} num 
 * @returns string
 */
function fizzBuzz(num) {
    var results = [];

    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            results.push('FizzBuzz');
        }else if(i % 3 === 0) {
            results.push('Fizz');
        }else if(i % 5 === 0) {
            results.push('Buzz');
        }else {
            results.push(i);
        }
    }

    return results.join(', ');
}

console.log(fizzBuzz(20));