// Odd-heavy array

function isOddHeavy(n){
  if (n.length === 0) { return false };
  const sortedN = n.sort((a,b) => a-b);
  const firstOddIndex = sortedN.findIndex(i => i%2);
  console.log(sortedN, firstOddIndex);
  return sortedN.slice(firstOddIndex).find(i => i%2 === 0) === undefined;
}