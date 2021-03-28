function fibonacci(n) {
  let last = [1];
  let penult = [0];
  let temp
  for(let i = 2; i < n+1 ; i++) {
    temp = last
    last = add(last, penult);
    penult = temp;
  }
  return last
}

function add(oneArray, otherArray) {
  let oneLength = oneArray.length;
  let otherLength = otherArray.length;
  let resultLength
  if (oneLength > otherLength) {
    resultLength = oneLength;
    otherArray = otherArray.concat(Array(resultLength-otherLength).fill(0));
  } else {
    resultLength = otherLength;
    oneArray = oneArray.concat(Array(resultLength-oneLength).fill(0));
  }
  let result = Array(resultLength);
  let ten = 0;
  for(let i = 0; i < resultLength; i++) {
    let sum = oneArray[i] + otherArray[i] + ten;
    if (sum > 9) {
      sum = sum % 10;
      ten = 1;
    } else {
      ten = 0;
    }
    result[i] = sum;
  }
  if (ten) result.push(1);
  return result;
}

function reverseAndJoin(arr) {
  let translated = '';
  for(let i = arr.length-1; i >= 0; i--) {
    translated = translated + arr[i];
  }
  return translated;
}

function aroundFib(n) {
  let result = fibonacci(n);
  let chunkSize = result.length % 25 || 25;
  let lastChunk = reverseAndJoin(result.slice(0, chunkSize));
  let frequencies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  result.forEach((d) => { 
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

console.log(aroundFib(666));