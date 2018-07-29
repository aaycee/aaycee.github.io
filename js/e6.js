/** Akachukwu Obi, 2018

Project Euler #6 - Difference of Sum of squares and squares of sum

The sum of the squares of the first ten natural numbers is:
            1^2 + 2^2 + ... + 10^2 = 385 
The square of the sum of the first ten natural numbers is: 
            (1 + 2 + ... + 10)^2 = 55^2 = 3025 
Hence the difference between the sum of the squares of the first
ten natural numbers and the square of the sum is 3025 − 385 = 2640. 

Find the difference between the sum of the squares of the first one 
hundred natural numbers and the square of the sum.

Retrieved June 25, 2018 from https://projecteuler.net/problem=6
**/

/* oooooooooooo     MAIN SOLUTION     oooooooooooo */
function diffOfSumOfSquares(max) {
    var sum, sumOfSquares;
    sum = max * (max + 1) / 2; // sum of n natural numbers is 
                               //  n(n+1)/2
    sumOfSquares = (max / 6) * (2 * max + 1) * (max + 1);
    return sum * sum - sumOfSquares;
}
// test
diffOfSumOfSquares(100);
// --> 25164150

// Voila! No for loops, no problems!



/* oooooooooooo     BUILD UP     oooooooooooo */

// rudimentary iteration method for any min, max range
function diffOfSumSquares(min, max) {
    var i, sum, sumOfSquares;
    sum = 0;
    sumOfSquares = 0;
    for (i = min; i <= max; i += 1) {
        sumOfSquares += i * i;
        sum += i;
    }
    return sum * sum - sumOfSquares;
}
// test
diffOfSumSquares(1, 100);
// --> 25164150


// Let's improve on the method above

// Since we're adding natural numbers, min is always 1. 
// Then,it is widely known that sum of n natural numbers = n(n+1)/2; so...

function diffOfSumSq(max) {
    var i, sum, sumOfSquares;
    sum = max * (max + 1) / 2; // sum of n natural numbers is 
                               //  n(n+1)/2
    sumOfSquares = 0;
    for (i = 1; i <= max; i += 1) {
        sumOfSquares += i * i;
    }
    return sum * sum - sumOfSquares;
}
// test
diffOfSumSq(100);
// --> 25164150

// Marginally better; but for really large numbers, we try to avoid for loops.

/* Some fancy math I found at projecteuler.net/overview=006 gives a nice function for sum of squares:

    let f(n) = 1^2 + 2^2 + ... + n^2 where n is a natural number
then
        f(n) = (n/6)*(2n + 1)*(n+1)
        
It's pretty neat derivation actually, I recommend checking it out.

This means that...
*/
function diffSumSq(max) {
    var sum, sumOfSquares;
    sum = max * (max + 1) / 2; // sum of n natural numbers is 
                               //  n(n+1)/2
    sumOfSquares = (max / 6) * (2 * max + 1) * (max + 1);
    return sum * sum - sumOfSquares;
}
// test
diffSumSq(100);
// --> 25164150

// Voila! No for loops, no problems!