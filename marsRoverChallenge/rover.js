const {
  turnLeft,
  turnRight,
  move,
} = require("../marsRoverChallenge/positioning");

//function to create rovers
function createRover(plateau, x, y, direction) {
  let rover = {
    plateauCoordinates: plateau,
    xCoordinate: x,
    yCoordinate: y,
    direction: direction,
  };
  let hasNumber = /\d/;
  let validDirections = ["N", "S", "W", "E"];

  if (isNaN(x) || isNaN(y)) {
    throw new Error("Error: Rover co-ordinates cannot contain characters");
  }

  if (x > rover.plateauCoordinates[0] || y > rover.plateauCoordinates[1]) {
    throw new Error(
      "Error: Rover co-ordinates have to be less than plateau co-ordinates"
    );
  }

  if (x < 0 || y < 0) {
    throw new Error("Error: Rover co-ordinates cannot be negative");
  }

  if (hasNumber.test(direction)) {
    throw new Error("Error: Rover direction cannot be a number");
  }

  if (!validDirections.includes(direction)) {
    throw new Error("Error: Rover direction has to be 'N', 'S', 'W' or 'E'");
  }

  return rover;
}

//function to check for collision
function checkCollision(rover, instructions, x, y) {
  let roverTemp = JSON.parse(JSON.stringify(rover));
  let errorMsg = "";

  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case "L":
        roverTemp.direction = turnLeft(roverTemp.direction);
        break;
      case "R":
        roverTemp.direction = turnRight(roverTemp.direction);
        break;
      case "M":
        [roverTemp.xCoordinate, roverTemp.yCoordinate] = move(roverTemp);
        if (roverTemp.xCoordinate === x && roverTemp.yCoordinate === y) {
          throw new Error(
            "Error: Possible collision at co-ordinates " + x + " " + y
          );
        }
    }
  }
  return "";
}

module.exports = {
  createRover,
  checkCollision,
};
