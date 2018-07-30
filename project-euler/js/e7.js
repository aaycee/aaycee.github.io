/** Akachukwu Obi, 2018

Project Euler #7 - 10001st prime

Retrieved 25 June 2018 from https://projecteuler.net/problem=7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13.

What is the 10001st prime number?

**/

// First solution: using factors function and factors.length === 2 prime number definition

var nthPrime = function (max) {
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
    
    // then test whether or not number is prime
    var primeSet, count;
    primeSet = [2];
    for (count = 1; primeSet.length < max; count += 2) { // only odd numbers
        if (getFactors(count).length === 2) { // test for primality of numbers in the factor set
            primeSet.push(count);
        }
    }
    // return primeSet;
    return primeSet[primeSet.length - 1];
};
// test
nthPrime(10001);
// --> 104743
// not bad; works quickly but there's surely a better way than checking factors and factor-length with a for-loop

/*
The Seive of Eratosthenes is always a good call for checking for 
and "seiving" primes up to some upper bound. 

But when we do not know the upper bound, we'd use this modified seive 
adapted from https://projecteuler.net/overview=007

Let's begin with the following definitions and proven assumptions:

1. 1 is not a prime
2. All primes but 2 are odd
    Odd numbers are in the form of 2k + 1 or num (mod 2) === 1
3. All primes greater than 3 are in the form of 6k +/- 1
4. Any number n can have only one primefactor greater than Math.sqrt(n)
    This means that if there is no prime factor less than sqrt(n), then n must be prime

Using this idea, we can create a general isPrime function, then run a loop like above. We're essentially replacing my getFactors().length === 2 by the isPrime seive.

*/

function isPrime(n) {
    "use strict";
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
            f += 6; // all primes greater than 3 are in the form of 6k +/- 1 where k is an integer
        }
        return true; // if there is no prime factor less than sqrt(n), then n must be prime
    }
}
// test
// isPrime(19);
// --> true

// now for the loop part
function lastPrime(max) {
    "use strict";
    var primeSet, count;
    primeSet = [2];
    for (count = 1; primeSet.length < max; count += 2) {
        if (isPrime(count)) {
            primeSet.push(count);
        }
    }
    // return primeSet;
    return primeSet[primeSet.length - 1];
}
// test
lastPrime(10001);
// doesn't work. It's too late at night jor, lemme watch some World Cup highlights

// after a few days, I realized n % f + 2 is the problem, should be n % (f + 2). Damn this gave me some headache.