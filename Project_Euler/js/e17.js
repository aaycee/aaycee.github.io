/* Akachukwu Obi, 2018
 *
 * Project Euler #17 - Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, 
 * five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written 
 * out in words, how many letters would be used?
 *
 * NOTE: Do not count spaces or hyphens. For example, 342 (three hundred 
 * and forty-two) contains 23 letters and 115 (one hundred and fifteen) 
 * contains 20 letters. 
 * The use of "and" when writing out numbers is in compliance with British usage.
 * 
 * Retrieved 28 June 2018 from https://projecteuler.net/problem=17
 */

"use strict";
// lets first try building names of numbers
function nameNumber(num) {
	// function returns the name of any number (less than 1000)
	var units, teens, tens, name;

	units = {0: "", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
			6: "six", 7: "seven", 8: "eight", 9: "nine"};

	teens = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
			14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen",
			18: "eighteen", 19: "nineteen"};

	tens = {1: "ten", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty",
			6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};

	function makeTwoDigitNum(num) {
		// make a two-digit number or appendage
		var name = "";
		if (num < 20) {
			name = teens[num]; // recognize teens
		} else if (num < 100) {
			num = String(num);
			name = tens[num[0]]; // sth like twenty ...
			if (num[1] !== "0") {
				name += "-" + units[num[1]]; // ... -two
			}
		}
		return name;
	}

	function makeThreeDigitNum(num) {
		// make a three-digit number or appendage
		var name, numString;
		numString = String(num);
		name = units[numString[0]] + " hundred";
		if (numString[1] === "0") {
			if (numString[2] !== "0") {
				name += " and " + units[numString[2]];
			} else {
				name += "";
			}
		} else {
			// slice two digits of the three
			num = Number(numString.substring(1));
			name += " and " + makeTwoDigitNum(num); // and get two-digit name
		}
		return name;
	}

	// main body
	if (num === 0) {
		name = "zero";
	} else if (num < 10) {
		name = units[num]; // returns the value in the units key-value pair
	} else if (num < 100) {
		name = makeTwoDigitNum(num);
	} else if (num < 1000) {
		name = makeThreeDigitNum(num);
	} else if (num === 1000) {
		name = "one thousand";
	}
	return name;
}
// test
// nameNumber(102); // one hundred and two


// now let's build a list
function buildNameNumberList(start, end) {
	var list, i;
    list = {};
	for (i = start; i <= end; i += 1) {
		list[i] = nameNumber(i);
		// console.table(list);
	}
	return list;
}
// test
buildNameNumberList(1, 20);


// now onto the main part
function namesLength(start, end) {
	var arr, i;
    arr = []; // first let's build an array

	// add names to an array
	for (i = start; i <= end; i += 1) {
		arr.push(nameNumber(i));
		// console.table(list);
	}
	arr = arr.join(""); // join the elements into one string

	// remove spaces and hyphens from string
	// "str".replace("-", "") didn't really work so I'll use split/join
	arr = arr.split("-").join(""); // removes hyphens ...
	arr = arr.split(" ").join(""); // ... then removes spaces

	// return arr;
	return arr.length;
}
// test
namesLength(1, 1000); // 21124
