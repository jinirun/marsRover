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

module.exports = {
  createRover,
};
