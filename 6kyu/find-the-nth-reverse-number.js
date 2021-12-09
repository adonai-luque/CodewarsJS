// Find the nth Reverse Number

function findReverseNumber(n) {
  let last = 0;
  let power = 1
  let even = false;
  let k = 2

  const reverse = (n) => {
    let reversed = 0;
    while (n>0) {
      reversed *= 10
      reversed += n % 10
      n = Math.floor(n/10); 
    }
    return reversed
  }
  
  if (n > 50000) {
    k = 50001
    last = 400000004
    power = 9
    even = false
  }
  
  if (n > 100000) {
    k = 100001
    last = 900000009
    power = 9
    even = false
  }

  if (n > 150000) {
    k = 150001
    last = 5000000005
    power = 10
    even = true
  }

  if (n > 200000) {
    k = 200001
    last = 10000000001
    power = 11
    even = false
  }

  if (n > 250000) {
    k = 250001
    last = 15000000051
    power = 11
    even = false
  }

  if (n > 300000) {
    k = 300001
    last = 20000000002
    power = 11
    even = false
  }

  if (n > 350000) {
    k = 350001
    last = 25000000052
    power = 11
    even = false
  }

  if (n > 400000) {
    k = 400001
    last = 30000000003
    power = 11
    even = false
  }

  if (n > 450000) {
    k = 450001
    last = 35000000053
    power = 11
    even = false
  }

  if (n > 500000) {
    k = 500001
    last = 40000000004
    power = 11
    even = false
  }

  if (n > 550000) {
    k = 550001
    last = 45000000054
    power = 11
    even = false
  }

  if (n > 600000) {
    k = 600001
    last = 50000000005
    power = 11
    even = false
  }

  if (n > 650000) {
    k = 650001
    last = 55000000055
    power = 11
    even = false
  }

  if (n > 700000) {
    k = 700001
    last = 60000000006
    power = 11
    even = false
  }

  if (n > 750000) {
    k = 750001
    last = 65000000056
    power = 11
    even = false
  }

  if (n > 800000) {
    k = 800001
    last = 70000000007
    power = 11
    even = false
  }

  if (n > 850000) {
    k = 850001
    last = 75000000057
    power = 11
    even = false
  }

  if (n > 900000) {
    k = 900001
    last = 80000000008
    power = 11
    even = false
  }

  if (n > 950000) {
    k = 950001
    last = 85000000058
    power = 11
    even = false
  }

  for (let i = k; i <= n; i++) {
    if (even) {
      let halfLength = Math.ceil(power/2)
      let half = Math.floor(last/10**(halfLength))
      let newHalf = half + 1;
      let otherHalf = newHalf
      // console.log(power, half, newHalf, otherHalf)
      if (last === 10**power - 1) {
        last += 2;
        power += 1
        even = !even
      } else {
        last = newHalf * 10**(halfLength) + reverse(otherHalf)
      }  
    } else {
      let halfLength = Math.ceil(power/2)
      let half = Math.floor(last/10**(halfLength-1));
      let newHalf = half + 1;
      let otherHalf = Math.floor(newHalf/10);
      // console.log(power, half, newHalf, otherHalf)
      if (last === 10**power - 1) {
        last += 2;
        power += 1
        even = !even
      } else {
        last = newHalf * 10**(halfLength-1) + reverse(otherHalf)
      }
    }
  }    
  return last;
}

console.log(findReverseNumber(50000))
console.log(findReverseNumber(150000))
console.log(findReverseNumber(250000))
console.log(findReverseNumber(350000))
console.log(findReverseNumber(450000))
console.log(findReverseNumber(550000))
console.log(findReverseNumber(650000))
console.log(findReverseNumber(750000))
console.log(findReverseNumber(850000))
console.log(findReverseNumber(950000))
