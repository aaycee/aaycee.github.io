/* Akachukwu Obi, 2018

Project Euler #5 - smallest number divisible by 1 through 20

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Retrieved June 25, 2018 from https://projecteuler.net/problem=5
*/

/* __________________________________________________
First try. Doesn't work but I'll still try to make it work

    function smallestNumDiv(beginRange, endRange) {
        var possibleFactor, rangeSet;
        rangeSet = [];
        for (possibleFactor = beginRange; rangeSet.length < endRange; possibleFactor += endRange) {
            while (beginRange <= endRange) {
                if (beginRange % possibleFactor === 0) {
                    rangeSet.push(beginRange);
                    beginRange += 1;
                }
            }
        }
        return possibleFactor;
    }
    // test
    smallestNumDiv(1, 5);
    
*/

// code inspired by joezack.com
function gcd(a, b) { 
// find the greatest common divisor between two numbers. It doesn't matter the order
    var x, y, result;
    x = a;
    y = b;
    while (y !== 0) {
        result = x % y;
        x = y; // reassign values
        y = result; // setting y = result ensures we eventually get x % y === 0
    }
    return x;
}

function lcm(a, b) { // based on gcd; find lowest common multiple
    return (a * b) / gcd(a, b);
}

function smallestNumDivBy(min, max) {
    var i, result;
    result = min;
    for (i = min; i < max; i += 1) {
        result = lcm(result, i); // for each iteration, find the lcm of the previous lcm and the next number
        // lcm will ensure smallest multiple is returned and iteration will ensure the entire range is tested.
    }
    return result;
}
// test
smallestNumDivBy(1, 20);
// --> 232792560
