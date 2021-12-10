// Simple division

function solve(a,b){
  let result = true;
  const prime_factors = (n) => {
    let factors = [];
    let i = 2;
    let r = n;
    while (i <= n && r >= 2) {
      if (r % i === 0) {
        factors.push(i);
        r = r / i
      } else {
        i++;
      }
    }
    return factors;
  };
  let factors = prime_factors(b);
  let i = 0
  while (factors[i] && result) {
    if (a % factors[i]) result = false;
    i++;
  }
  return result;
}
