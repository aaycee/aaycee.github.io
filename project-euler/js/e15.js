/* Akachukwu Obi, 2018
 * Project Euler #15 - Lattice paths
 * 
 * Starting in the top left corner of a 2×2 grid, and only being able to move
 * to the right and down, there are exactly 6 routes to the bottom right corner
 * [see grid under images]
 * 
 * How many such routes are there through a 20×20 grid?
 *
 * Retrieved 28 June 2018 from https://projecteuler.net/problem=15
 */

// this is a combinatorics problem. A  2*2 grid has 4 boxes. 
// for 2 movements only, 4C(2!) does the job
// for 3 movements, 4C(3!) is my guess
// so for our 20 x 20 grid, 40C20 shoule work

function factorial(n) {
	// returns n! for any integer n >= 0
	var result = 1; // initialize result but also return 1 at f(0)
    while (n >= 1) {
        result *= n;
        n -= 1;
    }
    return result;
}

function combination(n, r) {
	// returns nCr for any two integers n >= r
	return (factorial(n) / (fatorial(r) * factorial(n-r)));
}

function lattice_path(gridSize) {
	// body...
	return combination(gridSize*2, gridSize)
}
// test
lattice_path(20) // 137846528820