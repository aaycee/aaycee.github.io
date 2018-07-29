# Akachukwu Obi
# Project Euler #14 - Longest Collatz sequence (phi function)
# Solved July 22, 2018

def phi_function(n):
	""" generates a Collatz sequence given a starting number"""
	result = [n]
	while n > 1:
		if n % 2 == 0:
			n = n / 2
		else:
			n = 3 * n + 1
		result.append(n)

	return result
	# return len(result)
# test
# print(phi_function(16))

def longest_chain_under(m):
	""" find the longest collatz sequence under a given number limit """

	maxLength = 0

	for i in range(m/2 + 1, m, 2): # assuming number would be odd
		length = len(phi_function(i))
		if length > maxLength:
			maxLength = length
			result = i

	return str(result) + ": " + str(maxLength) + " members"

print(longest_chain_under(1000000)) # 837799: 525 members; finished in 11.6 s


""" with several useful optimizations, we can shorten calculation time """
