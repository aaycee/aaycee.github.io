# Akachukwu Obi, 2018
# Project Euler #3 - Largest Prime Factor


# I have 3 possible solutions

# Sol 1: brute force naive code that first computes the factors of the number
# then seives those factors for primality

import math

def getFactors(number):
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
# print(getFactors(8))

def getPrimeFactors(n):
	a = getFactors(n)
	if len(a) == 2:
		primeFactors = n;
	else:
		primeFactors = [];
		for i in a: # loop through every element in a
			if len(getFactors(i)) == 2: # every prime number has exactly 2 factors only
				primeFactors.append(i)

	# return primeFactors
	return primeFactors[-1] # return largest prime factor

# test
# print(getPrimeFactors(600851475143)) # 6857


# Solution 2: using a different primality test

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

def getPrimeFac(number):
	a = getFactors(number)
	if isPrime(number):
		return number;
	else:
		primeFactors = [];
		for i in a: # loop through every element in a
			if isPrime(i): # every prime number has exactly 2 factors only
				primeFactors.append(i)

		# return primeFactors
		return primeFactors[-1] # return largest prime factor

# print(getPrimeFac(101)) # 101
# print(getPrimeFac(600851475143)) # 6857

# Solution 3

"""
function find_highest_prime_factor(n) {
    var max, i;
    max = Math.round(Math.sqrt(n));
    for (i = max; i >= 2; i--) {
        if (n % i === 0 && find_highest_prime_factor(i) === 1) {
            return i;
        }
    }
    return 1; // if all else fails, return 1
}

var target = 600851475143;
print(find_highest_prime_factor(target));

"""

def find_highest_prime_factor(n):
	max = int(math.ceil(math.sqrt(n))) # making this an integer for range sake
	for i in range(max, 1, -1): # this is how to tell python to count backwards
		if (n % i == 0) and (find_highest_prime_factor(i) == 1):
			return i
	return 1

print(find_highest_prime_factor(600851475143)) # 6857

