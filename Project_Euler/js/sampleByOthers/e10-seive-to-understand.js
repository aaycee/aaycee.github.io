// seive of eras I'm yet to understand
// by this guy  https://benmccormick.org/2017/11/28/sieveoferatosthenes/

function* generatePrimes() {
    const markedNotPrime = {};
    let valueToCheck = 2;
    while(true) {
        if (!(valueToCheck in markedNotPrime)) {
            yield valueToCheck
            markedNotPrime[valueToCheck**2] = [valueToCheck]
        } else {
            let primes =markedNotPrime[valueToCheck];
            primes.forEach(prime=> {
                let nextMultipleOfPrime = prime + valueToCheck;
                if (nextMultipleOfPrime in markedNotPrime) {
                    markedNotPrime[nextMultipleOfPrime].push(prime);
                } else {
                    markedNotPrime[nextMultipleOfPrime] = [prime];
                }
            })
            delete markedNotPrime[valueToCheck];
        }
        valueToCheck += 1
    }
}

let gen = generatePrimes();
for(var i=0; i< 1000000; i ++) {
    gen.next()
}
console.log(gen.next().value)

// or you may also use this map function
function* generatePrims() {
    const markedNotPrimeMap = new Map();
    let valueToCheck = 2;
    while(true) {
        if (!(markedNotPrimeMap.has(valueToCheck))) {
            yield valueToCheck
            markedNotPrimeMap.set(valueToCheck**2, [valueToCheck])
        } else {
            let primes =markedNotPrimeMap.get(valueToCheck)
            primes.forEach(prime=> {
                let nextMultipleOfPrime = prime + valueToCheck;
                if (markedNotPrimeMap.has(nextMultipleOfPrime)) {
                    markedNotPrimeMap.get(nextMultipleOfPrime).push(prime);
                } else {
                    markedNotPrimeMap.set(nextMultipleOfPrime, [prime]);
                }
            })
            markedNotPrimeMap.delete(valueToCheck);
        }
        valueToCheck += 1
    }
}