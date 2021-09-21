// Bowling Pins
function bowlingPins(arr){
  let transformPositions = {
    1: 10,
    2: 8,
    3: 9,
    4: 5,
    5: 6,
    6: 7,
    7: 1,
    8: 2,
    9: 3,
    10: 4
  }
  arr = arr.map(e => transformPositions[e])
  let pins = "I I I I\n I I I \n  I I  \n   I   "
  let pinsLeft = ""
  let currentPosition = 1
  pins.split("").forEach(ch => {
    if (ch === "I") {
      if (arr.includes(currentPosition)) {
        pinsLeft += " "
      } else {
        pinsLeft += ch
      }
      currentPosition += 1
    } else {
      pinsLeft += ch
    }
  })
  return pinsLeft
}