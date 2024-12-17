const greatestCommonDivisor = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return Math.abs(a);
};


greatestCommonDivisor(Math.abs(2), Math.abs(3));