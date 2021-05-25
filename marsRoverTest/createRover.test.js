const{
  createRover
} = require("../marsRoverChallenge/createRover");

describe("createRover", () => {
    test("Returns an error if a character or string is passed as the rover dimension", () => {
    expect(createRover([5,5], 'g',5,'N')).toBe("Error: Rover co-ordinates cannot contain characters");
    expect(createRover([5,5],5,'h','E')).toBe("Error: Rover co-ordinates cannot contain characters");
  })
  test("Returns an error if co-ordinates are greater than the plateau dimensions", () => {
    expect(createRover([5,5],6,5,'N')).toBe("Error: Rover co-ordinates have to be less than plateau co-ordinates");
    expect(createRover([5,5],5,6,'E')).toBe("Error: Rover co-ordinates have to be less than plateau co-ordinates");
  })
  test("Returns an error if co-ordinates are negative", () => {
    expect(createRover([5,5],-6,5,'N')).toBe("Error: Rover co-ordinates cannot be negative");
    expect(createRover([5,5],5,-6,'E')).toBe("Error: Rover co-ordinates cannot be negative");
  })

  test("Returns an error message if the direction passed is empty", () => {
    expect(createRover([5,5], 1, 2, '')).toBe("Error: Rover direction has to be 'N', 'S', 'W' or 'E'");
  })
  test("Returns an error message if the direction passed is not a valid character", () => {
    expect(createRover([5,5], 1, 2, 'M')).toBe("Error: Rover direction has to be 'N', 'S', 'W' or 'E'");
  })
  test("Returns an error message if the direction passed is a number", () => {
    expect(createRover([5,5], 1, 2, 5)).toBe("Error: Rover direction cannot be a number");
  })
})
