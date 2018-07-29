# Akachukwu Obi
# Project Euler #7 

# see .js files for build up

import math

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

def nthPrime(max):
	primeSet = [2]
	count = 1
	while len(primeSet) < max:
		count += 2
		if (isPrime(count)):
			primeSet.append(count)

	return primeSet[-1]

print(nthPrime(10001)) # 104743