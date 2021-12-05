// Padovan numbers

function padovan(n) {
  let first = 1;
  let second = 1;
  let third = 1;
  if (n < 3) return 1;
  for (let i = 3; i <= n; i++) {
    [first, second, third] = [second, third, first + second];
  }
  return third;
}

