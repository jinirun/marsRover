//function to return the final position of the mars rover

//function to return the direction when the Rover turns Left
function turnLeft(direction) {
  let newDirection = "";

  switch (direction) {
    case "N":
      newDirection = "W";
      break;
    case "W":
      newDirection = "S";
      break;
    case "S":
      newDirection = "E";
      break;
    case "E":
      newDirection = "N";
      break;
  }

  return newDirection;
}

//function to return the direction when Rover turns Right
function turnRight(direction) {
  let newDirection = "";

  switch (direction) {
    case "N":
      newDirection = "E";
      break;
    case "E":
      newDirection = "S";
      break;
    case "S":
      newDirection = "W";
      break;
    case "W":
      newDirection = "N";
      break;
  }

  return newDirection;
}

//function to return new co-ordinates in the same direction when Rover Moves one grid
function move(rover) {
  let newX = 0,
    newY = 0;

  switch (rover.direction) {
    case "N":
      newX = rover.xCoordinate;
      newY =
        rover.yCoordinate + 1 > rover.plateauCoordinates[1]
          ? rover.yCoordinate
          : rover.yCoordinate + 1;
      break;
    case "E":
      newX =
        rover.xCoordinate + 1 > rover.plateauCoordinates[0]
          ? rover.xCoordinate
          : rover.xCoordinate + 1;
      newY = rover.yCoordinate;
      break;
    case "S":
      newX = rover.xCoordinate;
      newY =
        rover.yCoordinate - 1 < 0 ? rover.yCoordinate : rover.yCoordinate - 1;
      break;
    case "W":
      newX =
        rover.xCoordinate - 1 < 0 ? rover.xCoordinate : rover.xCoordinate - 1;
      newY = rover.yCoordinate;
      break;
  }

  return [newX, newY];
}

function finalPosition(rover, instructions) {
  for (let dir = 0; dir < instructions.length; dir++) {
    switch (instructions[dir]) {
      case "L":
        rover.direction = turnLeft(rover.direction);
        break;
      case "R":
        rover.direction = turnRight(rover.direction);
        break;
      case "M":
        [rover.xCoordinate, rover.yCoordinate] = move(rover);
        break;
    }
  }

  return rover.xCoordinate + " " + rover.yCoordinate + " " + rover.direction;
}

module.exports = {
  finalPosition,

  turnLeft,
  turnRight,
  move,
};
