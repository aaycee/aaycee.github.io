// Code to perform action on an array; Eloquent JavaScript; derived 19/Jun/18
var forEach = function (array, action) { // function takes in array and action
    'use strict';
    var i;
    for (i = 0; i < array.length; i = i + 1) { // set up a counter to go through array
        action(array[i]); // perform action on array item e.g., console.log (array[0])
    }
};
// test
// forEach([1, 2, 3], console.log);

// using the forEach function to sum an array of numbers
var numbers = [0, 1, 2], sum = 0;
forEach(numbers, function (number) {
    sum = sum + number;
});
console.log(sum);

function changeCatToRat() {
    var cat, set, i;
    cat = "cat";
    set = [];
    for (i = 0; i < cat.length; i += 1) {
        set.push(cat.charAt(i));
    }
    set[0] = "r";
    // return set.join();
    return set[0] + set[1] + set[2]; // concatenates the strings in the set.
}
// test
changeCatToRat();
// --> "rat"