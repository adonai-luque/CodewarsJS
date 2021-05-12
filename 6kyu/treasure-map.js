// #8: Treasure Map

function findX(map){
  let steps = 0;
  let xCoord = (map[0].length - 1) /2;
  let yCoord = (map.length - 1) /2;
  let maxSteps = xCoord * yCoord;
  
  let instruction;
  let treasure;
  
  function move(instruction) {
    switch (instruction[0]) {
      case 'N':
        yCoord -= +instruction[1];
        break;
      case 'S':
        yCoord += +instruction[1];
        break;
      case 'W':
        xCoord -= +instruction[1];
        break;
      case 'E':
        xCoord += +instruction[1];
        break;
    }
  }
  while (steps <= (maxSteps * 2)) {
    if (xCoord < 0 || xCoord >= map[0].length) break;
    if (yCoord < 0 || yCoord >= map.length) break;
    instruction = [map[yCoord][xCoord][0], map[yCoord][xCoord].slice(1,)];
    if (instruction[0] === 'X'){
      treasure = [yCoord, xCoord];
      break;
    }
    move(instruction);
    steps += 1;
  }  
  return treasure || null;
}
