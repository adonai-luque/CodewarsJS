function meeting(s) {
  return s.toUpperCase()
          .split(';')
          .map((e) => `(${e.split(':')[1]}, ${e.split(':')[0]})`)
          .sort()
          .join('')
}