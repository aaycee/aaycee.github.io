/** Akachukwu Obi, 2018

Project Euler #16 - Power of 2 digits sum

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

Retrieved 28 June 2018 from https://projecteuler.net/problem=16

**/

// brute force code to get sum

function sumDigits(base, power) {
    "use strict";
    if (power > 30) {
        return "power = " + Math.pow(base, power) + ". I don't feel comfortable doing the sum";
    }
    var i, sum, str;
    sum = 0;
    str = String(Math.pow(base, power));
    for (i in str) {
        sum += Number(str[i]);
    }
    return "power = " + str + ", and sum = " + sum;
}
// test
sumDigits(2, 20);
// to begin, Math.pow(2, 1000) gives 1.0715086071862673e+301; not precise enough to sum all of its digits

// Here's a solution by some guy I forgot to credit
var getDigits = function (power) {
    "use strict";
    var digits, i;
    digits = [1];
    while (power > 0) {
        for (i = digits.length - 1; i >= 0; i -= 1) {
            digits[i] *= 2;
            if (digits[i] > 9) {
                digits[i] -= 10;
                digits[i + 1] = digits[i + 1] || 0;
                digits[i + 1] += 1;
            }
        }
        power -= 1;
    }
    return digits;
};

var getSum = function (power) {
    "use strict";
    var digits, sum, i;
    digits = getDigits(power);
    sum = 0;
    for (i = digits.length - 1; i >= 0; i -= 1) {
        sum += digits[i];
    }
    return sum;
};

getSum(15); // 31
getSum(1000); // 1366


// And here is another solution by another guy I forgot to credit
function problem16() {
    "use strict";
    var number, sum, i, j, overflow, count, digit;
    number = [1];
    sum = 0;

    for (i = 0; i < 1000; i += 1) {
        overflow = 0;
        count = number.length + 1;

        for (j = 0; j < count; j += 1) {
            digit = number[j] || 0;
            digit = 2 * digit + overflow;
            if (digit > 9) {
                digit -= 10;
                overflow = 1;
            } else {
                overflow = 0;
            }
            number[j] = digit;
        }
    }

    for (i = 0; i < 1000; i += 1) {
        sum += number[i];
    }
    
    return sum;
}
// test
problem16(); // 1366

// APPARENTLY THIS SHIT CAN BE DONE IN ONE LINE WITH PYTHON!!!!
// print(sum([int(a) for a in str(2**1000)])) # that's all
// SHIIII THAT'S WHY I'M LEARNING PYTHON!