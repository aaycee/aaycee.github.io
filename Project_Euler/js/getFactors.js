function getFactors(number) {
    var factors, sqrt, possibleFactor, otherPossibleFactor;
    factors = [];
    possibleFactor = 1;
    sqrt = Math.sqrt(number);
    while (possibleFactor <= sqrt) {
        if (number % possibleFactor === 0) {
            factors[factors.length] = possibleFactor;

            otherPossibleFactor = number / possibleFactor;
            if (otherPossibleFactor !== possibleFactor) {
                factors[factors.length] = otherPossibleFactor;
            }
        }
        possibleFactor += 1;
    }

    return factors;
}

// test
getFactors(130);