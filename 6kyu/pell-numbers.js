// Pell Numbers

function pell(n) {
  if (n < 2) return n;
  let last = 1n;
  let penult = 0n;
  for (let i = 2; i <= n; i++) {
    [penult, last] = [last, 2n * last + penult];
  }
  return last;
}

const assert = {
  equal(a, b) {
    console.log(a == b);
  },
};

assert.equal(pell(1), 1);
assert.equal(pell(2), 2);
assert.equal(pell(3), 5);
assert.equal(pell(4), 12);
