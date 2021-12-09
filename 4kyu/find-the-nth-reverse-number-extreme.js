function findReverseNumber(n) {
  const reverse = (number) => {
    let reversed = 0n
    while (number > 0n) {
      reversed = reversed * 10n + number % 10n
      number /= 10n 
    }
    return reversed
  }
  let bigN = BigInt(n)
  let power = BigInt(Math.floor(Math.log10(n)))
  if ((power > 0) && (bigN < 11n * 10n ** (power - 1n))) power -= 1n
  let even = (bigN < 2n * 10n ** power)
  let half = bigN - 10n ** power
  let trimmedHalf = half / 10n
  return even ? half * 10n**power + reverse(half) : half * 10n**(power) + reverse(trimmedHalf)
}

let i = 0 
while (i++ < 20000) {
  console.log(findReverseNumber(i))
}
