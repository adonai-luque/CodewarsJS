// Even Fibonacci Sum

function fibonacci(max) {
  let sum = 0;
  let penult = 0;
  let last = 1;
  while (last < max) {
    if (last % 2 === 0) sum += last;
    last = penult + last;
    penult = last - penult;
  }
  return sum;
}

console.log(fibonacci(33));
