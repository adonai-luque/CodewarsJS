function changer(str) { 
  const nextChar = (ch) => {
    if (ch === 'z') { return 'a' };
    if (ch === 'Z') { return 'A' };
    return String.fromCharCode(ch.charCodeAt(0) + 1);
  };
  const isLetter = (ch) => ch.match(/\b[a-zA-Z]\b/);
  const upOrLow = (ch) => ch.match(/\b[aeiouAEIOU]\b/) ? ch.toUpperCase() : ch.toLowerCase();
  return [...str].map((ch => {
    if (isLetter(ch)) { return upOrLow(nextChar(ch)); }
    return ch;
  })).join('');
}