/** Akachukwu Obi, 2018

Project Euler #3 - Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?

Retrieved 25 June 2018 from https://projecteuler.net/problem=3
**/

var getPrimeFactors = function (n) {
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
    
    // then test for prime factors of the number
    var a, primeFactors, count;
    a = getFactors(n);
    if (a.length === 2) { // return initial number if it's prime
        primeFactors = n;
    } else {
        primeFactors = [];
        for (count = 0; count < a.length; count += 1) {
            if (getFactors(a[count]).length === 2) { // test for primality of numbers in the factor set
                primeFactors.push(a[count]);
            }
        }
    }
    // return primeFactors;
    return primeFactors[primeFactors.length - 1];
};
// test
getPrimeFactors(600851475143);
// 6857
// this program works, quickly too. But there must be a way that skips the computing load of finding initial factors then seiving them for primality using the factors algorithm




// After some googling, I'm once again put to shame by the elegance of JS. Code by joezack.com

function find_highest_prime_factor(n) {
    var max, i;
    max = Math.round(Math.sqrt(n));
    for (i = max; i >= 2; i--) {
        if (n % i === 0 && find_highest_prime_factor(i) === 1) {
            return i;
        }
    }
    return 1; // if all else fails, return 1
}

var target = 600851475143;
print(find_highest_prime_factor(target));
// --> 6857