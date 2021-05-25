//function to create rovers
function createRover(plateau, x, y, direction){
  let rover = {plateauCoordinates : plateau, xCoordinate : x, yCoordinate: y, direction: direction};
  let hasNumber = /\d/;
  let validDirections    = ['N', 'S', 'W', 'E'];

  if(isNaN(x) || isNaN(y)){
    return "Error: Rover co-ordinates cannot contain characters";
  }
  if(x > rover.plateauCoordinates[0] || y > rover.plateauCoordinates[1]){
    return "Error: Rover co-ordinates have to be less than plateau co-ordinates";
  }

  return rover;
}

module.exports = {
  createRover
}

