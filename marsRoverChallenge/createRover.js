//function to create rovers
function createRover(plateau, x, y, direction){
  console.log("in rover " + plateau + " " + x + " " + y + " " + direction);
  let rover = {plateauCoordinates : plateau, xCoordinate : x, yCoordinate: y, direction: direction};
  let hasNumber = /\d/;
  let validDirections    = ['N', 'S', 'W', 'E'];

  if(plateau[0] === 0 || plateau[1] === 0){
    return "Error: Plateau co-ordinate cannot be zero";
  }
  if(plateau[0] < 0 || plateau[1] < 0){
    return "Error: Plateau co-ordinate cannot be negative";
  }
  if(isNaN(plateau[0]) || isNaN(plateau[1])){
    return "Error: Plateau co-ordinates cannot contain characters";
  }

  if(isNaN(x) || isNaN(y)){
    return "Error: Rover co-ordinates cannot contain characters";
  }
  if(x > rover.plateauCoordinates[0] || y > rover.plateauCoordinates[1]){
    return "Error: Rover co-ordinates have to be less than plateau co-ordinates";
  }
  if(x < 0 || y < 0){
    return "Error: Rover co-ordinates cannot be negative";
  }

  if(hasNumber.test(direction)){
    return "Error: Rover direction cannot be a number";
  }
  if(!validDirections.includes(direction)){
    return "Error: Rover direction has to be 'N', 'S', 'W' or 'E'";
  }
  console.log("rover= " + rover);
  return rover;
}

module.exports = {
  createRover
}

