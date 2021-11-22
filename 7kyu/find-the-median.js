// All Star Code Challenge #14 - Find the median

function median(array) {
  const l = array.length
  array.sort((a,b) => a-b)
  return (l % 2 === 0) ? (array[(l-2)/2] + array[l/2])/2 : array[(l-1)/2]
}
