// Beginner Series #3 Sum of Numbers

function getSum( a,b )
{
  let sum = 0;
  let lower = a < b ? a : b
  let upper = a + b - lower
  for (i = lower; i < upper + 1; i++) {
    sum += i
  }
  return sum
}
