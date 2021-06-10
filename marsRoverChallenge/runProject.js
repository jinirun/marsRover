const { createPlateau } = require("../marsRoverChallenge/plateau");
const { createRover, checkCollision } = require("./rover");
const {
  checkInstructions,
} = require("../marsRoverChallenge/checkInstructions");
const { finalPosition } = require("./positioning");

const plateau = createPlateau(5, 5);
let rover1;
let rover2;
let instructions = "";
let xR2 = 0,
  yR2 = 0;
let collisionChk = "";
let xR1 = 0,
  yR1 = 0;

if (!plateau.includes("Error")) {
  rover1 = createRover(plateau, 1, 2, "N");
  rover2 = createRover(plateau, 3, 3, "E");

  if (
    !rover1.toString().includes("Error") &&
    !rover2.toString().includes("Error")
  ) {
    xR1 = rover1.xCoordinate;
    yR1 = rover1.yCoordinate;
    xR2 = rover2.xCoordinate;
    yR2 = rover2.yCoordinate;
  }

  if (!rover1.toString().includes("Error")) {
    instructions = checkInstructions("LMLMLMLMM");

    collisionChk = checkCollision(rover1, instructions, xR2, yR2);

    if (!instructions.includes("Error") && !collisionChk.includes("Error")) {
      console.log(
        "Final position of rover: " + finalPosition(rover1, instructions)
      );
    }
  }

  if (!rover2.toString().includes("Error")) {
    instructions = checkInstructions("MMRMMRMRRM");
    collisionChk = checkCollision(rover2, instructions, xR1, yR1);
    if (!instructions.includes("Error") && !collisionChk.includes("Error")) {
      console.log(
        "Final position of rover: " + finalPosition(rover2, instructions)
      );
    }
  }
}
