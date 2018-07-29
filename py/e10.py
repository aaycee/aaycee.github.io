# Akachukwu Obi, 2018
# Project Euler #10

# Solution 1: check for primes then sum them

import math

# check for primes
def isPrime(n):
	if n == 1:
		return False
	elif n < 4:
		return True # 2 and 3 are prime
	elif (n % 2 == 0) or (n % 3 == 0): # a single '|' or 'or' could represent 'or'
		return False
	elif n < 9: # just applies to 7 at this point
		return True
	else:
		f = 5
		r = math.floor(math.sqrt(n))
		while f <= r:
			if (n % f == 0) or (n % (f + 2) == 0):
				return False
			f += 6 # all primes greater than 3 are in the form of 6k +/- 1 where k is an integer

		return True # if there is no prime factor less than sqrt(n), then n must be prime

# sum the primes, calls isPrime
def sumPrimes(limit):
	primeSet = [2]
	sums = primeSet[0]
	for count in range(1, limit, 2): # sum primes less than some limit
		if (isPrime(count)):
			primeSet.append(count)
			sums += count

	return sums

# test
# print(sumPrimes(2000000)) # 142913828922; took 9.9s


# Solution 2: Sieve of Eratosthenes
def sumPrimesLessThan(limit):
	halfLimit = (limit - 1) // 2 # // is used to ensure floor
	a = []; # initialize set to hold numbers

	for i in range(0, halfLimit): # create a set up to halfLimit and
		a.append(True) # initialize all its members to True

	sqrt = int(math.sqrt(limit))
	for i in range(0, sqrt):
		if a[i]: # all a[i] are already true
			j = 2 * i + 3 # all primes can be represented as 2k + 3 (though not for all integer k)
			k = i + j # k is a multiple of 3; i + 2i + 3 = 3(i + 1)
			while k < halfLimit:
				a[k] = False
				k += j

	primeSum = 2
	for i in range(0, halfLimit):
		if a[i]:
			primeSum += 2 * i + 3

	return primeSum

# test
print(sumPrimesLessThan(2000000)) # 142913828922; took 0.6s
# this is certainly not Sieve of Eras, and I don't yet completely understand the code myself






