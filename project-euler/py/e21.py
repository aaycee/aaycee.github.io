# Akachukwu Obi, 2018
# Project Euler #21 - Amicable Numbers

import math

def get_proper_divisors(number):
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

	# sort the factorset and remove last element
	factors.sort() # or factors = sorted(factors), then factors.pop()
	factors.pop()

	return factors # returns an array of factors
# test
# print(get_proper_divisors(8))

def sum_of_amicable_numbers(limit):
	""" get the sum of amicable numbers less than some limit """
	total = 0
	for i in range(2, limit):
		sum_of_proper_divisors = sum(get_proper_divisors(i))
		if i != sum_of_proper_divisors: # avoid perfect numbers
			if i == sum(get_proper_divisors(sum_of_proper_divisors)):
				total += i

	return total
# test
print(sum_of_amicable_numbers(10000)) # 31626, took 0.3 s
