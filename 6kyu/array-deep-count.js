// Array Deep Count

function deepCount(a){
  console.log(a);
  if (a.length === 0) return 0;
  else if (a.length === 1){
    if (Array.isArray(a[0])) return 1 + deepCount(a[0]);
    else return 1;
  }
  else {
    return deepCount([a[0]]) + deepCount(a.slice(1));
  }
}
