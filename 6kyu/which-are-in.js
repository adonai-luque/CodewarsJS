// WHich are in?

function inArray(array1, array2) {
  const map = {};
  const results = [];
  array1.sort().forEach(a1 => {
    array2.every(a2 => {
      if (a2.includes(a1)) {
        results.push(a1);
        return false;
      }
      return true;
    })
  })
  return results;
}
