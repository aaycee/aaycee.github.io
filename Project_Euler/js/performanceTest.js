var t0, result, t1;
t0 = performance.now();
result = t0; // replace t0 with your function to be tested
t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate:', result);