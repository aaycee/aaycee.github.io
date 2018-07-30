/** Akachukwu Obi, 2018
 *
 * Project Euler #20 - Factorial digit sum
 * 
 * n! means n × (n − 1) × ... × 3 × 2 × 1. For example, 10! = 10 × 9 × 8 x ...
 * = 3628800, and the sum of the digits in the number 10! is 27
 *
 * Find the sum of the digits in the number 100!
 *
 * Retrieved 28 June 2018 from https://projecteuler.net/problem=20
 */

// As usual, here's some rudimentary factorial and digitSum functions. But by looking at factorial(10), I already know that there has to be a smarter approach to this.

function factorial(n) {
    var result = 1; // initialize result but also return 1 at f(0)
    while (n >= 1) {
        result *= n;
        n -= 1;
    }
    return result;
}
// test
factorial(5);
// --> 120

function digitSum(num) {
    var numString, count, sum;
    numString = String(num);
    sum = 0;
    for (count = 0; count < numString.length; count += 1) {
        sum += Number(numString[count]);
    }
    return sum;
}
// test
digitSum(189);
// --> 18

// ultimate test
digitSum(factorial(10));
// --> 27
digitSum(factorial(100));
// --> NaN