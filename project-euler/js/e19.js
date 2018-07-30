/* Akachukwu Obi, 2018
 * 
 * Project Euler #19 - Counting Sundays
 * 
 * You are given the following information, but you may prefer 
 * to do some research for yourself.
 * 
 * 1 Jan 1900 was a Monday.
 * Thirty days has September,
 * April, June and November.
 * All the rest have thirty-one,
 * Saving February alone,
 * Which has twenty-eight, rain or shine.
 * And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, 
 * but not on a century unless it is divisible by 400
 * 
 * How many Sundays fell on the first of the month during 
 * the twentieth century (1 Jan 1901 to 31 Dec 2000)?
 * 
 * Retrieved 28 June 2018 from https://projecteuler.net/problem=19
 */

 // first, we can't use the Date() method because it only goes back to 1970
 
 // There are 7 days in a week, and usually 365 days in a year
 // Now 7 and 365 are relatively prime, i.e., their greatest common divisor is 1
 // This means that Jan 1 always falls on the same day as Dec 31 except on leap years
 // Since 1900 is a leap year, Jan 1 1901 is a Wednesday; next Sunday is Jan 5
 // if we consider Jan 1 as our first day, then any totalDays % 7 === 5 is a Sunday

function sundaysOnFirstMonthSince(startYear, endYear) {
	/* how many Sundays on first day of the month within some range */
	/* endYear is Dec 31 of the given year */
	"use strict";
	var i, daysOfMonth, year, totalDays, sundayMod, sundayCount;

	daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	// months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	// daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	function checkLeapYear(year) {
		if ((year % 4 === 0) && (year % 400 !== 0)) {
			daysOfMonth[1] = 29;
		}
		return daysOfMonth;
	}

	function getSundayMod() {
		/* using the fact that Jan 1 1900 is a Monday,
		 * see what mod of 7 Sunday falls on */
		var i, j, t, sundayMod;
		t = 0; // t is total days since 1900
		for (i = 1900; i <= startYear; i += 1) {
			daysOfMonth = checkLeapYear(i);

			for (j = 0; j < daysOfMonth.length; j += 1) {
				t += daysOfMonth[j];
			}
		}

		sundayMod = t % 7;
		return sundayMod;
	}

	sundayCount = 0;
	totalDays = 0;
	sundayMod = getSundayMod();

	for (year = startYear; year <= endYear; year += 1) {
		// check leap year
		daysOfMonth = checkLeapYear(year);

		// daysofMonth[i] + 1 gives first of next month
		for (i = 0; i < daysOfMonth.length; i += 1) {
			totalDays += daysOfMonth[i];
			if ((totalDays + 1) % 7 === sundayMod) {
				sundayCount += 1;
			}
		}
	}

	return sundayCount;
}
// test
sundaysOnFirstMonthSince(1901, 2000); // 171



