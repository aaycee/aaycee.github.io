/** Akachukwu Obi, 2018

Project Euler #10 - Summation of all primes below 2 million

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.

Retrieved 25 June 2018 from https://projecteuler.net/problem=10

**/

// ----------    MAIN SOLUTION    ---------- //
// When you want to find all primes below some limit, use the Sieve of Eratosthenes

// I'm still working on the code. But here's an example from some guy on Stack Overflow
function problem10() {
    "use strict";
    var i, j, k, l, m, s, a; // i, j, k are counters, others are defined as we go
    l = Math.floor((2000000 - 1) / 2); //not sure why we're going halfway
    a = [];
    for (i = 0; i < l; i += 1) {
        a[i] = true; // make a whole bunch of numbers true
    }
    m = Math.sqrt(2000000); // first part that makes sense
    for (i = 0; i <= m; i += 1) { 
        if (a[i]) { // all a[i] are already true
            j = 2 * i + 3; // all primes can be represented as 2k+3, certainly not for all k in Z as k = 3 gives 9 which is not prime
            k = i + j; // initialize k as a multiple of 3; k = 2i + 3 + i = 3i+3 = 3(i+1);
            while (k < l) {
                a[k] = false; // makes sense 
                k += j; // make k a multiple of j and set it to false
            }
        }
    } // this doesn't seem like the seive of eratosthenes
    s = 2;
    for (i = 0; i < l; i += 1) { // now I see why we halved limit
        if (a[i]) {
            s += 2 * i + 3; // because here we use the 2k + 3
        }
    }
    return s;

}

var d1 = new Date().getTime();
var answer = problem10();
var d2 = new Date().getTime();

console.log('Answer: ' + answer + '; time: ' + (d2 - d1) + ' ms');

// ----------    BUILD UP    ---------- //

function smPrime(max) {
    "use strict";
    
    // first test for prime
    function isPrime(n) {
        if (n === 1) {
            return false;
        } else if (n < 4) {
            return true; // 2 and 3 are prime
        } else if (n % 2 === 0 || n % 3 === 0) {
            return false;
        } else if (n < 9) { // this just applies to 7 at this point
            return true;
        } else {
            var r, f;
            f = 5;
            r = Math.floor(Math.sqrt(n));
            while (f <= r) {
                if (n % f === 0 || n % (f  + 2) === 0) {
                    return false;
                }
                f += 6; // all primes except 2 and 3 can be written as 6k +/- 1 where k is an integer
            }
            return true; // if there is no prime factor less than sqrt(n), then n must be prime
        }
    }

    // then add it to a set and sum up
    var primeSet, count, sum;
    primeSet = [2];
    sum = primeSet[0];
    for (count = 1; count < max; count += 2) { // only odd numbers
        if (isPrime(count)) { // test for primality of numbers in the factor set
            primeSet.push(count);
            sum += count;
        }
    }
    // return primeSet;
    return sum;
}
smPrime(2000000); // 142913828922
// lags a bit but works fast enough


// Classic example of old habits die young following. Using my original algorithm from e7:
// Get factors of some number; if the factorset === 2, then it's prime. 
// Add it to a primeSet and sum it up. Do until 2,000,000. Will surely be slow but I'm curious how fast/slow

var sumPrime = function (max) {
    'use strict';
    
    // first get factors of the number
    function getFactors(number) {
        var factors, sqrt, possibleFactor, otherPossibleFactor;
        factors = [];
        possibleFactor = 1;
        sqrt = Math.sqrt(number);
        while (possibleFactor <= sqrt) {
            if (number % possibleFactor === 0) {
                factors[factors.length] = possibleFactor;

                otherPossibleFactor = number / possibleFactor;
                if (otherPossibleFactor !== possibleFactor) {
                    factors[factors.length] = otherPossibleFactor;
                }
            }
            possibleFactor += 1;
        }

        return factors;
    }
    
    // then test for prime, add it to a set, and sum it up
    var primeSet, count, sum;
    primeSet = [2];
    sum = primeSet[0];
    for (count = 1; count < max; count += 2) { // only odd numbers
        if (getFactors(count).length === 2) { // test for primality of numbers in the factor set
            primeSet.push(count);
            sum += count;
        }
    }
    return sum;
    // return primeSet;
};
// test
sumPrime(2000000); // 142913828922
// works well but much slower as expected