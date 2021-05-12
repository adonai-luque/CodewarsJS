// Merged objects

function objConcat(o){
  if (o.length === 1) return o[0];
  return {...o[0], ...objConcat(o.slice(1))};
}
