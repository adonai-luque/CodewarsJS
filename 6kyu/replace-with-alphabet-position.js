function alphabetPosition(text) {
  let alphabetReducer = (reduced, c) => {
    if (/[A-Z]/.test(c.toUpperCase())) {
      reduced.push((c.toUpperCase().charCodeAt() - 64).toString());
    }
    return reduced;
  }
  return [...text].reduce(alphabetReducer, []).join(' ');
}