// By 3, or not by 3? That is the question . . .

function divisibleByThree(str){
  sum = 0
  str.split('').forEach ( (digit) => sum += +digit );
  return (sum % 3 === 0);
}
