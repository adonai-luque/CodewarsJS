// Convert Hash To An Array

function convertHashToArray(hash){
  let result = [];
  Object.keys(hash).sort().forEach((key) => result.push([key, hash[key]]));
  return result;
}
