function rotateClockwise(matrix) {
  let temp = [...matrix].reverse();
  if (temp[0]) return temp[0].split('').map((_, index) => temp.map((e) => e[index]).join(''))
  return []
}

console.log(rotateClockwise(['abc', 'def', 'ghi', 'jkl']))
