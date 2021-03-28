function toCamelCase(str) {
  let capitalize = (word) => (word[0].toUpperCase() + word.slice(1));
  if (str) return str.match(/([a-zA-Z]+)/g).map((word, index) => ((index>0) ? capitalize(word) : word)).join('')
  return '';
}