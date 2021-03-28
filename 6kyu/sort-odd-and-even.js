function sortArray(array) {
  let [even , odd] = [[], []];
  array.forEach((n) => (n%2) ? odd.push(n) : even.push(n));
  even = even.sort((a, b) => b-a);
  odd = odd.sort((a, b) => a-b);
  return array.map((n) => (n%2) ? odd.shift() : even.shift());
}