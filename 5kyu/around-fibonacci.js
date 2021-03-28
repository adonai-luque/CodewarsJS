function fibonacci(n) {
  let last = BigInt(1);
  let penult = BigInt(0);
  for(let i = 2; i < n+1 ; i++) {
    last = last + penult;
    penult = last - penult;
  }
  return last.toString()
}

function aroundFib(n) {
  let result = fibonacci(n);
  let chunkSize = result.length % 25;
  let lastChunk = result.slice(-1 * chunkSize);
  let frequencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  result.split('').forEach((d) => { 
    frequencies[d] += 1;
  })
  let index = 0;
  let digit = 0;
  let maximum = frequencies[0];
  frequencies.forEach((f) => {
    if (f > maximum) {
      digit = index;
      maximum = f;
    }
    index += 1
  })
  return `Last chunk ${lastChunk}; Max is ${maximum} for digit ${digit}`
}

console.log(aroundFib(666))
