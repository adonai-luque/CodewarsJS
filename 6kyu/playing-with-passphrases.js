function playPass(s, n) {
  let encode = (c, index) => {
    if (/\d/.test(c)) {
      return (9 - c).toString();
    } else if (/[A-Z]/.test(c)){
      return (index % 2) 
        ? String.fromCharCode((c.charCodeAt() + n - 65) % 26 + 65).toLowerCase()
        : String.fromCharCode((c.charCodeAt() + n - 65) % 26 + 65);
    } else {
      return c;
    }
  }
  return [...s].map((c, index) => encode(c, index)).reverse().join('')
}