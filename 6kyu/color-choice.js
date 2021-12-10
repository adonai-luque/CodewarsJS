// Color choice

function checkchoose(m, n) {
  let result = -1
  const prod = (to, from = 1) => {
    let p = 1
    let i = from
    while (i <= to) {
      p = p * i;
      i++;
    }
    return p;
  };
  const choose = (n, x) => Math.round(prod(n, x+1) / prod(n-x));
  let j = 1
  while ((j < n) && (result < 0)) {
    if (choose(n, j) === m) result = j;
    j++;
  }
  return result;
}

console.log(checkchoose(6540715896, 48))
