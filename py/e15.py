# Akachukwu Obi
# Project Euler #1
# created July 10, 2018

def Multi35(count):
	# no need to initialize variables
	count = count - 1
	m3 = 3 * 0.5 * (count // 3) * ((count // 3) + 1) # // works as math.floor in both python2.7 and python3
	m5 = 5 * 0.5 * (count // 5) * ((count // 5) + 1) 
	m15 = 15 * 0.5 * (count // 15) * ((count // 15) + 1)
	return int(m3 + m5 - m15) # would have been returned as a float int() converts to whole number int
	
print(Multi35(1000)) 
