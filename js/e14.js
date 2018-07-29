/* Akachukwu Obi, 2018
 * 
 * Project Euler #14 - Longest Collatz sequence
 * 
 * The following iterative sequence is defined for the set of positive integers:
 *      n → n/2 (n is even)
 *      n → 3n + 1 (n is odd)
 * Using the rule above and starting with 13, we generate the following sequence:
 *      13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
 * We see that this sequence (starting at 13 and finishing at 1) contains 10 terms
 * Although it has not been proved yet (Collatz Problem),
 * it is thought that all starting numbers finish at 1
 * 
 * Which starting number, under one million, produces the longest chain?
 * NOTE: Once the chain starts the terms are allowed to go above one million
 * 
 * Retrieved 28 June 2018 from https://projecteuler.net/problem=14
 */

function phi_function(n) {
    // generates a Collatz sequence given a starting number
    'use strict';
	var list = [n]; // initialize the set

	do {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        list.push(n);
    } while (n > 1);

    return list;
    // return "Set of " + list.length + " numbers: " + list;
}
// test
// phi_function(45);

function longestChainUnder(m) {
    "use strict";
    var i, len, maxLen, result;
    maxLen = 0;
    
    // based on phi_function, can I assume number with longest chain is odd?
    // not really it turns out but mostly safe for numbers under 10^7
    
    for (i = m / 2 + 1; i < m; i += 2) {
        len = phi_function(i).length;
        if (len > maxLen) {
            maxLen = len;
            result = i;
        }
    }
    return result;
}
// test
// longestChainUnder(10); // 9
longestChainUnder(1000000); // 837799
// 1000000 took two seconds or so but worked. There's surely a way to improve this algorithm

// Here are some useful optimizations:
// since if n is even, n -> n/2, phi_function(2n) = phi_function(n) + 1
// also if n is even, phi_function(2n) > phi_function(n) so we don't even need to bother with the first half of the limit
// If n is odd, 3n + 1 is even, so we can save even more time by storing phi_function(n) as 2 + phi_function((3n + 1) / 2)
// also it turns out that assuming odd phis are longer almost works, but not really.

// so let's focus on length alone
