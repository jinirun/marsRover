const{
  turnRight,
  turnLeft,
  move
} = require ("../marsRoverChallenge/positioning");

//function to check for collision
function checkCollision(rover, instructions, x, y){
  let roverTemp = JSON.parse(JSON.stringify(rover));
  let errorMsg = "";

  for(let i=0; i<instructions.length; i++) {
    switch (instructions[i]) {
      case 'L': roverTemp.direction = turnLeft(roverTemp.direction);
        break;
      case 'R': roverTemp.direction = turnRight(roverTemp.direction);
        break;
      case 'M': [roverTemp.xCoordinate, roverTemp.yCoordinate] = move(roverTemp);
        if(roverTemp.xCoordinate === x && roverTemp.yCoordinate === y) {
          errorMsg = "Error: Possible collision at co-ordinates " + x + " " + y;
        }
    }
  }
  return errorMsg;
}

module.exports = {
  checkCollision
}
