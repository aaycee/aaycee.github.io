# Akachukwu Obi
# Project Euler #19
# created July 23, 2018

def first_day_sundays(start_year, end_year):
	""" finds how many sundays on the first day of the month within a given range """
	days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

	def check_leap_year(year):
		"""check for leap years and modify February"""
		if (year % 4) == 0 and (year % 400) != 0:
			days_of_month[1] = 29
		return days_of_month

	def get_sunday_mod():
		""" check for what mod of 7 Sunday falls on """
		t = 0 # t is total days since 1900
		# check leap year
		for i in range(1900, start_year+1):
			days_of_month = check_leap_year(i)

			# sum total days
			for j in range(len(days_of_month)):
				t += days_of_month[j]

		sunday_mod = t % 7
		return sunday_mod

	first_sunday_count = 0
	total_days = 0
	sunday_mod = get_sunday_mod()

	# main body
	for year in range(start_year, end_year + 1):
		days_of_month = check_leap_year(year)

		# find first sundays
		for i in range(len(days_of_month)):
			total_days += days_of_month[i]
			if (total_days + 1) % 7 == sunday_mod:
				first_sunday_count += 1

	return first_sunday_count
# test
print(first_day_sundays(1901, 2000)) # 171
