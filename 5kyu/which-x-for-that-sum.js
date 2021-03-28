// Which x for that sum?

function solve(m) {
  return (2*m + 1 - (4*m+1)**0.5)/(2*m);
}

console.log(solve(2))