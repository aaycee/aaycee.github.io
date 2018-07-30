# Akachukwu Obi, 2018
# Project Euler #6

# see .js file for build up

def diffOfSumOfSquares(max):
	sumOfNumbers = max * (max + 1) / 2 # sum of n natural numbers is n(n + 1)/2
	sumOfSquares = (max / 6.0) * (2 * max + 1) * (max + 1) # I used 6.0 to avoid getting a math.floor situation in puthon2.7
	return sumOfNumbers * sumOfNumbers - sumOfSquares

print(diffOfSumOfSquares(100)) #25164150.0