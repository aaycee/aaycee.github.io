var t0, result, t1;
t0 = performance.now();
result = t0; // replace t0 with your function to be tested
t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);


// code to control execution time

// timer = setTimeout("myfunction()", 1000) // execute in 1 second (1000ms)
// clearTimeout(timer); // cancel event

// similar to performance.now()
var ti = new Date();
var answer = t0; // replace t0 with your function to be tested
var tf = new Date();
console.log(answer, tf-ti)