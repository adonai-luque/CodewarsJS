// Simple sum of pairs

function solve(n) {
  if (n === 0) return 0;
  const nines = Math.floor(Math.log(n) / Math.log(10));
  const first = Math.pow(10, nines) - 1;
  const second = n - first;
  const sumOfDigits = (n) =>  n.toString().split('').reduce((acum, d) => acum + parseInt(d), 0);
  return nines * 9 + sumOfDigits(second);
}

const Test = {
  assertEquals(a, b) {
    console.log(a == b);
  },
};

Test.assertEquals(solve(18), 18);
Test.assertEquals(solve(29), 11);
Test.assertEquals(solve(45), 18);
Test.assertEquals(solve(1140), 33);
Test.assertEquals(solve(7019), 35);
