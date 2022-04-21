// ROT13

function rot13(str) {
  return str.replace(/[a-z]/ig, (ch) => String.fromCharCode(ch.charCodeAt(0) + (ch.toLowerCase() <= 'm' ? 13 : -13)));
}