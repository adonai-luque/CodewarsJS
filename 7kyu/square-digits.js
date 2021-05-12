function squareDigits(num){
  var acum = "";
  for (var i=0; i<String(num).length; i++) {
      acum += Math.pow(Number(String(num)[i]), 2);
      }
  return Number(acum);
  }
  