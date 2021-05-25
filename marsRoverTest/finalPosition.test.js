const {
  finalPosition
} = require("../marsRoverChallenge/finalPosition");
const {
  createPlateau
} = require("../marsRoverChallenge/createPlateau");
const{
  createRover
} = require("../marsRoverChallenge/createRover");
const {
  checkInstructions
} = require ("../marsRoverChallenge/checkInstructions");

describe("finalPosition", () => {
  test("If L is received, the Rover should turn 90 degrees to left and return the resulting direction", () => {
    //expect(finalPosition(createRover([createPlateau(5, 5)], 1, 2, 'N'),checkInstructions('L'),3,3)).toBe('1 2 W');
    expect(finalPosition({plateauCoordinates : [5,5], xCoordinate : 1, yCoordinate: 2, direction: 'N'}, 'L', 3, 3)).toBe('1 2 W');

    // expect(finalPosition(1, 2, 'W', 'L')).toBe('(1,2) S');
    // expect(finalPosition(1, 2, 'S', 'L')).toBe('(1,2) E');
    // expect(finalPosition(1, 2, 'E', 'L')).toBe('(1,2) N');
  })

  // test("If R is received, the Rover should turn 90 degrees to right and return the resulting direction", () => {
  //   expect(finalPosition(1, 2, 'N', 'R')).toBe('(1,2) E');
  //   expect(finalPosition(1, 2, 'W', 'R')).toBe('(1,2) N');
  //   expect(finalPosition(1, 2, 'S', 'R')).toBe('(1,2) W');
  //   expect(finalPosition(1, 2, 'E', 'R')).toBe('(1,2) S');
  // })
  //
  // test("If M is received, the Rover should move by one grid and return new co-ordinates in the same direction", () => {
  //   expect(finalPosition(1, 2, 'N', 'M')).toBe('(1,3) N');
  //   expect(finalPosition(1, 2, 'W', 'M')).toBe('(0,2) W');
  //   expect(finalPosition(1, 2, 'S', 'M')).toBe('(1,1) S');
  //   expect(finalPosition(1, 2, 'E', 'M')).toBe('(2,2) E');
  // })
  //
  // test("Returns the final position of the Rover when a series of instructions is passed", () => {
  //   expect(finalPosition(3, 3, 'E', 'MMRMMRMRRM')).toBe('(5,1) E');
  //   expect(finalPosition(1, 2, 'N', 'LMLMLMLMM')).toBe('(1,3) N');
  // })
})
