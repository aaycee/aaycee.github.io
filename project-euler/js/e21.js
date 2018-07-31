/* Akachukwu Obi, 2018
 * Project Euler #21 - Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n: 
 * (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a != b, then a and b are an amicable pair 
 * and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 
 * 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 
 * 1, 2, 4, 71 and 142; so d(284) = 220.
 * 
 * Evaluate the sum of all the amicable numbers under 10000.
 *
 */

// so are proper divisors essentially positive factors without the actual number?

"use strict";

function getProperDivisors(number) {
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

    factors.sort((a, b) => a - b); // sorts factorset in increasing order
    factors.pop(); // remove the last element
    return factors;
}
// test
getProperDivisors(220); // [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]

function getSum(array) {
    var i, sum = 0;
    for (i in array) {
        if (typeof (array[i]) === "number") { // just to be sure
            sum += array[i];
        }
    }
    return sum;
}
// test
getSum(getProperDivisors(220)); // 284
getSum(getProperDivisors(284)); // 220

// good ol' brute force
function amicableNumbersLessThan(n) {
    var i, j, amicArray = [], pdPair = {};
    for (i = 2; i < n; i += 1) {
		pdPair[i] = getSum(getProperDivisors(i));
    }
    for (i in pdPair) {
        for (j in pdPair) {
            if (Number(i) === pdPair[j] && Number(j) === pdPair[i] && i !== j) {
                amicArray.push(Number(j));
            }
        }
    }
   
    return getSum(amicArray);
}
// test
amicableNumbersLessThan(300); // 504
amicableNumbersLessThan(10000); // 31626
// took about 5.9 s; needs some serious optimization
// to begin, too many for-loops. So let's see if there's some alternate routesum

// the less for-loops, the better
function amicSum(n) {
    var i, sumOfProperDivisors, amicArray = [];
    for (i = 2; i < n; i += 1) {
        sumOfProperDivisors = getSum(getProperDivisors(i));
        if (i !== sumOfProperDivisors) { // avoid perfect numbers
            if (i === getSum(getProperDivisors(sumOfProperDivisors))) {
                amicArray.push(i);
            }
        }
    } // just one for-loop in this case

    return getSum(amicArray);
}
// test
// amicSum(1e3); // 504
amicSum(1e4); // 31626, took 41 ms
amicSum(1e6); // 27220963, took about 10 s
