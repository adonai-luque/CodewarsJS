// Cycle a list of values

function cycle(dir, arr, cur) {
  let l = arr.length;
  let idx = arr.indexOf(cur);
  if (idx < 0) return null;
  idx = (idx + dir) % l;
  while (idx < 0) {
    idx += l;
  }
  return arr[idx];
}

const assert = {
  strictEqual(a, b) {
    console.log(a === b);
  },
};

assert.strictEqual(cycle(-1, [1, 2, 3], 2), 1);
assert.strictEqual(cycle(1, [1, 2, 3], 4), null);
