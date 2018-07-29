# Akachukwu Obi, 2018
# Project Euler #9

def pythagoreanTripleSum(upTo):
	for a in range(3, (upTo - 3) / 3):
		for b in range(a + 1, (upTo - a) / 2):
			c = upTo - b - a
			if c * c == (a * a) + (b * b):
				# return a * b * c
				return str(a) + ' * ' + str(b) + ' * ' + str(c) + ' = ' + str(a * b * c)
	return "I tried ..." # if nothing is found
# test
print(pythagoreanTripleSum(1000)) # 31875000