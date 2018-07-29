// e20 by briguy37; retrieved 02/July/18 https://jsfiddle.net/briguy37/C73mz/

//NOTE:  LOWEST INDEX IS THE ONES PLACE, THIS MAKES THE NUMBERS APPEAR BACKWARDS WHEN LOGGING!

var digitArrayMultiply = function(digits1, digits2) {
    var productDigits = [];
    for (var i = 0; i < digits1.length; i++) {
        digit1 = digits1[i];
        for (var j = 0; j < digits2.length; j++) {
            digit2 = digits2[j];
            var product = digit1 * digit2;
            var productIndex = i + j;
            
            productDigits[productIndex] = (productDigits[productIndex] || 0) + product;
            rebalanceDigitArray(productDigits, productIndex);
        }
    }
    
    return productDigits;
};
    
var digitArrayAdd = function(digits1, digits2) {
    var sumDigits = [];

    var i = 0;
    var digit1 = digits1[i];
    var digit2 = digits2[i];
    while(digit1 || digit2){
        sumDigits[i] = sumDigits[i] || 0;
        if(digit1){
            sumDigits[i] += digit1;
        }
        if(digit2){
            sumDigits[i] += digit2;
        }
        
        rebalanceDigitArray(sumDigits, i);
        
        i++;
        digit1 = digits1[i];
        digit2 = digits2[i];
    }

    return sumDigits;
};

/**
 * Rebalances the digit array.  This will shift any numbers larger than 9 to higher digits.  
 This will only consider the provided index, and only rebalance higher indexes when there is an overflow.
 *
 * @param digits The digit array to balance
 * @param index The index to balance
 */
var rebalanceDigitArray = function(digits, index){
    var digit = digits[index];
    while(digit > 9){
        //Update the current index
        digits[index] = digit % 10;
        
        //Update the next index
        index++;
        digits[index] = digit = (digits[index] || 0) + ((digit - digit % 10) / 10);
    }
};

var testArray = [2,8,4];
var testArray2 = [1,9,3];

console.log(digitArrayMultiply(testArray, testArray2));

//END FRAMEWORK FUNCTIONS

var getSumOfFactorialDigits = function(num){
    //Get the factorial
    var multiplier = 2;
    var factorial = [1];
    while(num >= multiplier){
        factorial = digitArrayMultiply(factorial, [multiplier]);
        multiplier++;
    }
    
    //Get the sum
    var sum = 0;
    for(var i = 0; i < factorial.length; i++){
        sum += factorial[i];
    }
    
    return sum;
};
// test
getSumOfFactorialDigits(10);
// --> 
// console.log(getSumOfFactorialDigits(100));