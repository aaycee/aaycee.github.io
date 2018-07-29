/* Akachukwu Obi, 2018

Project Euler #4 - Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers. (do these numbers have to be different?)

Retrieved June 25, 2018 from https://projecteuler.net/problem=4
*/

/* ---------------------------------------------//
First attempts at solving this problem

Theorem: all four sized palindromic numbers (numbers between 1000 and 10000) are divisible by 11. Check out this program: 

// first, we define divisibility by 11 as having no remainders after 11 divides the number; i.e. number % 11 === 0

    var str, set, i, j;
    set = [];
    for (i = 1000; i < 10000; i += 1) {
        str = String(i);
        if (str.charAt(0) === str.charAt(str.length - 1) && str.charAt(1) === str.charAt(str.length - 2)) {
            set.push(i);
        }
    }
    for (j = 0; j < set.length; j += 1) {
        if (set[j] % 11 !== 0) {
            console.log(set[j], "is not a factor of 11");
        }
    }
    console.log(set);
    
Conjecture: all even-sized palindromic numbers are divisible by 11.

This conjecture might be helpful because we can find a small 6-digit palindrome that is a product of two three-digit numbers: 111111 = 143 * 777. This means that the largest palindrome number with two three digit multiples is 6-digits long. 

Revised steps and pseudocode:
1. While (998001 > palindrome > 100001), 
    get3DigitFactors (return factors) 
        for (count < 3digFactors.length / 2) only check half
            if 3digfactors[count] * 3digfactors[count++] === palindrome
                break
            else 
                go checkPalindrome(palindrome[index++])
            return palindrome

To cut my calculation time, I could start with the largest number and progress from there.

// -------------------------------------------- */

function getThreeDigitsFactors(number) {
    'use strict';
    var factors, threeDigitFactors, sqrt, possibleFactor, otherPossibleFactor, i;
    factors = [];
    threeDigitFactors = [];
    possibleFactor = 1;
    sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
        if (number % possibleFactor === 0) {
            factors.push(possibleFactor);

            otherPossibleFactor = number / possibleFactor;
            if (otherPossibleFactor !== possibleFactor && String(otherPossibleFactor).length === 3) {
                factors.push(otherPossibleFactor);
            }
        }
        possibleFactor += 1;
    }
    
    for (i = 0; i < factors.length; i += 1) {
        if (String(factors[i]).length === 3) {
            threeDigitFactors.push(factors[i]);
        }
    }

    return threeDigitFactors;
    // return threeDigitFactors.sort((a, b) => a - b); // return sorted array
}
// test
// getThreeDigitsFactors(10000);
// --> [100, 125, 200, 250, 400, 500, 625]

// check if any two three digit factors multiply to give the original number

function checkThreeDigitMultiple(number) {
    'use strict';
    var i, j, checkSet, returnSet;
    checkSet = getThreeDigitsFactors(number);
    returnSet = [];
    for (i = 0; i < checkSet.length; i += 1) {
        for (j = 0; j < checkSet.length; j += 1) {
            if (checkSet[i] * checkSet[j] === number) {
                // return number + ' = ' + checkSet[i] + ' * ' + checkSet[i]; // if you want only one answer
                returnSet.push(checkSet[i] + " * " + checkSet[j]);
            }
        }
    }
    return returnSet;
}
// test
// checkThreeDigitMultiple(20000);
// --> ["100 * 200", "200 * 100", "125 * 160", "160 * 125"] // not perfect (repeats), but works.

// main function
function checkPalindromeMultiple() {
    'use strict';
    // create a set of palindrome numbers between 100000 and 998001; check only 6-dig palindromes
    var str, palindromeSet, i, j;
    palindromeSet = [];
    for (i = 998001; i > 100000; i -= 1) { // start with the largest
        str = String(i);
        if (str.charAt(0) === str.charAt(str.length - 1) && str.charAt(1) === str.charAt(str.length - 2)) {
            if (str.length % 2 !== 0 || str.charAt(2) === str.charAt(3)) {
                palindromeSet.push(i);
            }
        }
    }
    
    // check the threeDigitFactors of the palindromeSet
    for (j = 0; j < palindromeSet.length; j += 1) {
        if (checkThreeDigitMultiple(palindromeSet[j]).length !== 0) {
            return palindromeSet[j];
        }
    }
}
// test
checkPalindromeMultiple();
// --> 906609


// This guy's code put my essay to shame but I'm still proud of the multi-use functions, and my code is actually faster. https://gist.github.com/msnider/4315679

function palindromic() {
// console.time('timeend'); // test runtime
    'use strict';
    var max, i, k, n, s;
    max = 0;
    for (i = 999; i > 99; i -= 1) {
        for (k = 999; k > 99; k -= 1) {
            n = i * k;
            s = String(n); // this, or
            // s = '' + n; // this converts a number to a string
            if (s === s.split("").reverse().join("") && n > max) {
                max = n;
            }
        }
    }
    return max;
}
// test
palindromic();
// console.timeEnd('timeend');
