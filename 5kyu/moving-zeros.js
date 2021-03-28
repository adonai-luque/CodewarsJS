// Moving Zeros To The End

 function moveZeros(arr) {
  let zeroes = []
  let notZeroes = []
  arr.forEach((e) => { (e === 0) ? zeroes.push(0) : notZeroes.push(e) })
  return notZeroes.concat(zeroes)
}