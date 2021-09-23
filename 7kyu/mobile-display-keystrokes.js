// Mobile Display Keystrokes

function mobileKeyboard(str){
  let strokes = {}
  let oneStrokers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"]
  let twoStrokers = ["a", "d", "g", "j", "m", "p", "t", "w"]
  let threeStrokers = ["b", "e", "h", "k", "n", "q", "u", "x"]
  let fourStrokers = ["c", "f", "i", "l", "o", "r", "v", "y"]
  let fiveStrokers = ["s", "z"]
  oneStrokers.forEach(ch => strokes[ch] = 1)
  twoStrokers.forEach(ch => strokes[ch] = 2)
  threeStrokers.forEach(ch => strokes[ch] = 3)
  fourStrokers.forEach(ch => strokes[ch] = 4)
  fiveStrokers.forEach(ch => strokes[ch] = 5)
  return str.split('').reduce((total, ch) => total + strokes[ch], 0)
}
