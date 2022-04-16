// Multiples of 3 or 5

const solution = (number) => {
  if (number <= 0) return 0;
  const three = ~~((number-1)/3);
  const five = ~~((number-1)/5);
  const fifteen = ~~((number-1)/15);
  return (3*three*(three+1) + 5*five*(five+1) - 15*fifteen*(fifteen+1))/2;
}
