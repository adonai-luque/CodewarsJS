// Currying functions: multiply all elements in an array


const multiplyAll = (arr) => (multiplier) => arr.map((e) => e * multiplier)
