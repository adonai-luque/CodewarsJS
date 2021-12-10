// Prime factors

function prime_factors(n) {
  let factors = [];
  let i = 2;
  let r = n;
  while (i <= n && r >= 2) {
    if (r % i === 0) {
      factors.push(i);
      r = r / i;
    } else {
      i++;
    }
  }
  return factors;
}
