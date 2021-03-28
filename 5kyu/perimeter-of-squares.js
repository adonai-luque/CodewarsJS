// Perimeter of squares in a rectangle

function perimeter(n) {
  let result = 1
  let last = 1;
  let penult = 0;
  for(let i = 2; i < n+2 ; i++) {
    last = last + penult;
    penult = last - penult;
    result += last;
  }
  return 4 * result
}

console.log(perimeter(5))