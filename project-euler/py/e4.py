
# Solution 1:

import math


def getThreeDigitFactors(number):
	factors = []
	threeDigitFactors = []
	possibleFactor = 1
	sqrt = math.sqrt(number)
	while possibleFactor <= sqrt:
		if number % possibleFactor == 0:
			factors.append(possibleFactor)

			otherPossibleFactor = number / possibleFactor
			if (otherPossibleFactor != possibleFactor) and len(str(otherPossibleFactor)) == 3:
				factors.append(otherPossibleFactor)

		possibleFactor += 1

	for i in range(0, len(factors)):
		if len(str(factors[i])) == 3:
			threeDigitFactors.append(factors[i])

	return threeDigitFactors
# test
# print(getThreeDigitFactors(10000)) # [625, 500, 400, 250, 200, 125, 100]
# I need to figure out python's sorting algorithm

def checkThreeDigitMultiple(number):
	checkSet = getThreeDigitFactors(number)
	returnSet = []
	for i in range(0, len(checkSet)):
		for j in range(0, len(checkSet)):
			if checkSet[i] * checkSet[j] == number:
				returnSet.append(str(checkSet[i]) + " * " + str(checkSet[j]))
				# had to convert the numbers to strings so that the concatenation works

	return returnSet
# test
# print(checkThreeDigitMultiple(20000)) # ['100 * 200', '200 * 100', '125 * 160', '160 * 125']
# has duplicates but I don't care for now

def checkPalindromeMultiple():
	palindromeSet = []
	for i in range(998001, 100000, -1):
		string = str(i)
		if (string[0] == string[-1]) and (string[1] == string[-2]):
			if (len(string) % 2 != 0) or (string[2] == string[3]):
				palindromeSet.append(i)

	for j in range(0, len(palindromeSet)):
		if len(checkThreeDigitMultiple(palindromeSet[j])) != 0:
			return palindromeSet[j]
# test
# print(checkPalindromeMultiple()) # 906609; took about 0.8s


# some other version of solution 1
def getLargePalindromeMultiple():
	max = 0
	for i in range(999, 99, -1):
		for j in range (999, 99, -1):
			multiple = i * j
			string = str(multiple)
			if (string[0] == string[-1]) and (string[1] == string[-2]) and (string[2] == string[3]):
				if multiple > max: 
					max = multiple
					factor1 = i
					factor2 = j

	# return max
	return str(max) + " = " + str(factor1) + " * " + str(factor2)
# test
print(getLargePalindromeMultiple()) # 906609; finished in about 0.6 s


# Solution 2: using python's string reverse check 

def getLargePalindrome():
	max = 0
	for i in range(999, 99, -1):
		for j in range (999, 99, -1):
			multiple = i * j
			string = str(multiple)
			if (string[::-1] == string) and multiple > max: # [::-1] is a neat string slicing trick that produces a reversed copy
				max = multiple

	return max
# test
# print(getLargePalindrome()) # 906609; finished in about 0.9 s

