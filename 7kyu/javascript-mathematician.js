// Javascript Mathematician

function calculate(...first) {
  return function(...second) {
    return [...first, ...second].reduce((a, b) => a+b, 0);
  }
}
