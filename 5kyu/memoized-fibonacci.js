// Memoized Fibonacci

function fibonacci(n) {
  let preLast = 0;
  let last = 1;
  if (n < 0) { return 0 }
  if (n < 2) { return n }
  for (let i = 1; i < n; i++) {
    last = preLast + last;
    preLast = last - preLast;
  }
  return last;
}