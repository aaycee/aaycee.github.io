// Below are some samples I found online. I may have partly modified some of them for sanity.

// some githuber, https://gist.github.com/ooade/a6f5a78e3edd355cbcaeaa366962bff2. Clean code but lacking comments, so I'll try to make sense of his code

var triNum1 = function (num) {
    'use strict';
    var x, y;
    x = 0;
    y = 1;
    
    while (factors(x).length <= num) {
        x += y;
        y++;
    }
    // console.log(x); 
    
    // x += y; and y++ essentially represents a clean algorithm for generating triangle numbers. I replaced console.log(x) to return x at the end of the function

    function factors(n) { // n is the equivalent of x above. If n is a local variable, why not just use x for consistency?
        
        let arr = [], i = 1, max = n; // let is basically var, not sure when/why either is preffered over the other
        
        while (i < max) { // essentially checking factors from 1 to the expected max triangle number
        if (n % i === 0) {
          arr.push(i); // i is a factor, pass it the array;

          let k = n / i; // k is also a factor; this makes sense
          if (i !== k) {
            arr.push(k); // only push k if it's not the current i
          }
          max = k;
        }

        i++; // makes sense so far
      }
      return arr.sort((a, b) => a - b); // I suppose this just sorts the array
        
      // return arr; // this works fine too, but if you print the array, it should appear unsorted.
    }
    
    return x;
    // return x + ": " + arr.length + " members long"; // doesn't work just yet because arr is local to factors. How can make it visible to the parent function. Returning arr in factors doesn't work. 
};
// test
triNum1(500);
// --> 76576500


// and this one is from briguy37. Retrieved 25 June 2018 from https://jsfiddle.net/briguy37/FSC3c/. 

function getFactors(number){
    var factors = [];
    
    var possibleFactor = 1;
    var sqrt = Math.sqrt(number); // why taking sqrt?
    while(possibleFactor <= sqrt){
        if(number % possibleFactor == 0){ // does == work here?
            factors[factors.length] = possibleFactor; // could use factors.push(possibleFactor) as well
            
            var otherPossibleFactor = number / possibleFactor;
            if(otherPossibleFactor > possibleFactor){
                factors[factors.length] = otherPossibleFactor;
            } 
        }
        possibleFactor++;
    }
    
    return factors;
}

function getTriangleNumberWithMoreThanNFactors(n){
    var counter, triangleNumber;
    counter = 1;
    triangleNumber = counter++;
    while(getFactors(triangleNumber).length < n){
        triangleNumber += counter++;
    }
    return triangleNumber;
}

console.log(getTriangleNumberWithMoreThanNFactors(6));
console.log(getTriangleNumberWithMoreThanNFactors(500));