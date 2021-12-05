// Count the Digit

function nbDig(n, d) {
  let count = 0
  const pattern = new RegExp(d, "gi");
  for (let i = 0; i <= n; i++) {
    let square = [i * i].toString()
    count += (square.match(pattern) || []).length
  }
  return count
}

function assertEquals(a, b) {
  console.log(a === b)
}

assertEquals(nbDig(5750, 0), 4700)
assertEquals(nbDig(11011, 2), 9481)
assertEquals(nbDig(12224, 8), 7733)
assertEquals(nbDig(11549, 1), 11905)
