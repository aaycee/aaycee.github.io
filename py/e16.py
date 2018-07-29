""" Akachukwu Obi, 2018

Project Euler #16 - Power of 2 digits sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

Retrieved from https://projecteuler.net/problem=16

Solved July 10, 2018

"""

# this can be solved in one line

print(sum([int(a) for a in str(2**1000)])) # uncomment to run

# But if you want to see a more elaborate solution, try

total = 0
for i in str(2**1000):
	total += int(i)
print(total)

