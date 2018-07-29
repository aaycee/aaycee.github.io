# Akachukwu Obi
# Project Euler # 17
# Solved July 23, 2018

def number_name(num):
	""" function returns the name of any number (less than 1000) """
	units = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
			6: "six", 7: "seven", 8: "eight", 9: "nine"}
	teens = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 
			14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 
			18: "eighteen", 19: "nineteen"}
	tens = {1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty",
			6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"}

	def make_two_digit_sum(num):
		""" make a two-digit number or appendage """
		name = ""
		if num < 20:
			name = teens[num]
		elif num < 100:
			num = str(num)
			name = tens[int(num[0])] # sth like twenty ...
			if num[1] != "0":
				name += "-" + str(units[int(num[1])]) # ... -two
		return name

	def make_three_digit_sum(num):
		""" make a three-digit number or appendage """
		num_str = str(num)
		name = str(units[int(num_str[0])]) + " hundred"
		if num_str[1] == "0":
			if num_str[2] != "0":
				name += " and " + str(units[int(num_str[2])])
			else:
				name += ""
		else:
			# slice last two digits of the three
			num = int(num_str[1:])
			name += " and " + make_two_digit_sum(num)
		return name

	# main body
	if num == 0:
		name = "zero"
	elif num < 10:
		name = units[num]
	elif num < 100:
		name = make_two_digit_sum(num)
	elif num < 1000:
		name = make_three_digit_sum(num)
	elif num == 1000:
		name = "one thousand"

	return name
# test
# print(number_name(489))


# now onto the main part
def names_length(start = 1, end = 1000):
	""" return length of number names within a given range """
	
	# first add the names to an array
	names = []
	for i in range(start, end + 1):
		names.append(number_name(i))

	# remove spaces and hyphens
	new_names = [] # there might be a better wa
	for i in names:
		i = i.replace("-", "")
		i = i.replace(" ", "")
		new_names.append(i)

	# then count the letters used
	letters = 0
	for i in new_names:
		letters += len(i)

	return letters

print(names_length()) # 21124

# var = "three hundred and forty-two"
# var = var.split()
# var = [a for a in var]