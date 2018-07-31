# Akachukwu Obi
# Project Euler #12
# created July 10, 2018

import math

def get_factors(number):
	factors = []
	possibleFactor = 1
	sqrt = math.sqrt(number)
	while possibleFactor <= sqrt:
		if number % possibleFactor == 0: # if it is a factor
			factors.append(possibleFactor) # add it to factors

			otherPossibleFactor = number / possibleFactor # guaranteed to be a whole integer
			if otherPossibleFactor != possibleFactor:
				factors.append(otherPossibleFactor)

		possibleFactor += 1

	return factors # this set is unsorted
# test
# print(get_factors(8))

def first_trinum_over_n_divisors(limit):
	""" find the first triangle number with over "limit" divisors"""
	n = 1 # n is position of triangle number
	factorset = [] # initialize factorset
	while len(factorset) <= limit:
		n += 1
		tri_num = n * (n + 1) / 2 # algorithm to calculate triangle number
		factorset = get_factors(tri_num)

	return tri_num
# test
print(first_trinum_over_n_divisors(500)) # 76576500, took 10.6 s
# similar algorithm in JavaScript took 0.284 s
