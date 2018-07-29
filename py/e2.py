# Akachukwu Obi, 2018
# Project Euler #2 - sum of even fibonacci terms
# see js file for build up and explanation

""" .js code
function evenFibonacciSum(limit) {
    "use strict";
    var a, b, c, sum;
    a = 1;
    b = 1;
    c = a + b;
    sum = 0;
    while (c < limit) {
        sum += c; // only adding c, which are even
        a = b + c; // classic fibonacci algorithm
        b = a + c;
        c = a + b;
    }
    return sum;
}
// test
evenFibonacciSum(4000000);
"""

def evenFibonacciSum(limit):
	a = 1 # first term
	b = 1 # second term
	c = a + b # third term
	sum = 0
	while c < limit:
		sum += c # only adding c which are even
		a = b + c # classic fibonacci algorithm
		b = a + c
		c = a + b

	return sum

# test
print(evenFibonacciSum(4000000)) # 4613732
