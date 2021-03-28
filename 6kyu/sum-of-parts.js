function partsSums(ls) {
  let sums =[0];
  ls.reverse().reduce((acum, n) => {
    sums.push(acum += n);
    return acum;
  }, 0)
  return sums.reverse();
} 