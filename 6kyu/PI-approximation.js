// PI approximation

function iterPi(epsilon) {
	let den = 1
  let sign = 1
  let counter = 0
  let pi = 0
  while (Math.PI - pi > epsilon || Math.PI - pi < -epsilon ) {
    pi += sign*4/den;
    sign *= -1;
    den += 2
    counter +=1
  }
  return [counter, +pi.toFixed(10)]
}
