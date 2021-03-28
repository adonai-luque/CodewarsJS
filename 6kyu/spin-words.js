function spinWords(text){
  const reverse = (word) => (word.length >= 5) ? word.split('').reverse().join('') : word
  return text.split(' ').map(reverse).join(' ')
}