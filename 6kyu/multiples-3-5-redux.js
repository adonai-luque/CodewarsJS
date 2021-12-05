// Multiples of 3 and 5 redux

function solution(number) {
  let quotient3 = Math.floor((number - 1) / 3);
  let quotient5 = Math.floor((number - 1) / 5);
  let quotient15 = Math.floor((number - 1) / 15);
  const multipleSum = (base, quotient) => (base * ( quotient * quotient + quotient) / 2);
  return ( multipleSum(3, quotient3) + multipleSum(5, quotient5) - multipleSum(15, quotient15) );
}

const Test = {
  assertEquals(a, b) {
    console.log(a == b);
  },
};

Test.assertEquals(solution(10), 23);
Test.assertEquals(solution(20), 78);
Test.assertEquals(solution(100), 2318);
Test.assertEquals(solution(200), 9168);
Test.assertEquals(solution(1000), 233168);
Test.assertEquals(solution(10000), 23331668);
Test.assertEquals(solution(1000000), 233333166668);
