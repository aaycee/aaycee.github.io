# Akachukwu Obi

# note that math.gcd(a,b) is already in use in python3

def gcd(a, b):
	# find the greatest common divisor between two numbers regardless of order
	x = a
	y = b
	while y != 0:
		result = x % y
		x = y # reassign values
		y = result # setting y = result ensures we eventually get x % y == 0

	return x

def lcm(a, b):
	return (a * b) / gcd(a, b)

def smallestNumDivBy(min, max):
	result = min
	for i in range(min, max):
		result = lcm(result, i)
		# for each iteration, find the lcm of the previous lcm and the next number
		# lcm ensures smallest multiple is returned and iteration ensures entire range is tested
	return result
# test
print(smallestNumDivBy(1, 20)) # 232792560, took about 0.1 s