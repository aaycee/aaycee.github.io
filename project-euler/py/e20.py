# Akachukwu Obi
# Project Euler #20 - Factorial digit sum
# solved July 25, 2018

# this could easily be solved using using the math module and python's powers

import math

def fac_dig_sum(num):
	""" get the sum of the digits of the factorial of any number"""
	fac = math.factorial(num)
	# convert fac to a str, put its members in an array, convert to int, then sum
	return sum([int(a) for a in str(fac)])

# test
print(fac_dig_sum(100)) # 648


# what if we didn't use the math module
def n_factorial(num):
	""" get the factorial of any digit """
	result = 1
	for i in range(1, num+1):
		result *= i
	return result
	
# test
# print(n_factorial(0))