// Remove Zeros

function removeZeros(arr) {
  
  function zero(value) {
    if ((value === 0) || (value === "0")) return true
    return false
  }

  function notZero(value) {
    if ((value === 0) || (value === "0")) return false
    return true
  }
  
  var len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (zero(arr[j - 1]) && notZero(arr[j])) {
        var temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
