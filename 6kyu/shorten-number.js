// Number Shortening Filter

function shortenNumber(suffixes, base) {
  return function(number) {
    if (parseInt(number) == number) {
      let suffix = 0;
      while (+number > base && suffix < suffixes.length - 1) {
        number = +number/base;
        suffix += 1;
      };
      return Math.floor(number) + suffixes[suffix];
    }
    else {
      return number.toString();
    }
  }
}
