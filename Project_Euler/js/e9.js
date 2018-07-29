/** Akachukwu Obi, 2018

Project Euler #9 - Special Pythagorean triplet

Retrieved 25 June 2018 from https://projecteuler.net/problem=9

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2. For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.

Find the product abc.

**/

// -------   MAIN SOLUTION ---------- //
var pythagoreanTripleSum = function (max) {
    "use strict";
	var a, b, c;

	for (a = 3; a < (max - 3) / 3; a += 1) {
		for (b = a + 1; b < (max - a) / 2; b += 1) {
			c = max - b - a;
			if (c * c === (a * a) + (b * b)) {
				return a + ' * ' + b + ' * ' + c + ' = ' + a * b * c;
			}
		}
	}
	return "I tried...";
};
// test
pythagoreanTripleSum(1000);
// --> "200 * 375 * 425 = 31875000"


// -----    BUILD UP    -------- //
// first lemme start by playing around

// check if any a, b, c is a Pythagorean triplet
function isAPythagoreanTriplet(a, b, c) {
    "use strict";
    if (a * a + b * b === c * c || c * c + b * b === a * a || c * c + a * a === b * b) {
        return true;
    } else {
        return false;
    }
}
// test
isAPythagoreanTriplet(3, 4, 5);
// --> true

// find any Pythagorean pairs for any number
function findPythagoreanTriple(a) {
    "use strict";
    var b, c;
    b = a + 1; // somewhat avoids multiples of triples
    c = Math.sqrt(a * a + b * b); // ensures c is defined
    while (c % 1 !== 0) {
        b += 1;
        c = Math.sqrt(a * a + b * b);
    }
    // return a + b + c
    return a + ', ' + b + ', ' + c;
}
// test
findPythagoreanTriple(3);
// --> 3, 4, 5

// give the condition a^2 + b^2 = c^2, and a + b + c = sum (which in this case is 1000), then a^2 + b^2 = (sum - a - b)^2. If we decide that a < b < c, then we find that a <= (s-3)/3 and b <= (s-a)/2.

// Using ancient Greek algorithm for pythagorean triples
function findPythagoreanTripleForAny(m, n) {
    "use strict";
    var a, b, c; // assuming a > b > c
    
    // ancient Greek algorithm to find any pythagorean triple
    a = m * m - n * n;
    if (a < 0) {
        a = a * -1; // corrects for negatives
    }
    b = 2 * m * n;
    c = m * m + n * n;
    
    // verify this algorithm
    if (c * c === a * a + b * b) {
        return a + ', ' + b + ', ' + c;
    } else {
        return "no Pythagorean triples found";
    }
    
}
// test
findPythagoreanTripleForAny(7, 8);
// --> 15, 112, 113

// Ok lemme stop playing... real solution

var pythagoreanTripleSumTo = function (max) {
    "use strict";
	var a, b, c;

	for (a = 3; a < (max - 3) / 3; a += 1) {
		for (b = a + 1; b < (max - a) / 2; b += 1) {
			c = max - b - a;
			if (c * c === (a * a) + (b * b)) {
				return a + ' * ' + b + ' * ' + c + ' = ' + a * b * c;
			}
		}
	}
	return "I tried...";
};
// test
pythagoreanTripleSumTo(1000);
// --> "200 * 375 * 425 = 31875000"
// works for small numbers; lags for larger ones.

// We can modify pythagoreanTripleSumTo using the Greek algorithm, but I'm not too sure how exactly