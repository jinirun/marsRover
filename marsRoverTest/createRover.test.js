const{
  createRover
} = require("../marsRoverChallenge/createRover");

describe("createRover", () => {
  test("Returns an error if a character or string is passed as the plateau dimension", () => {
    expect(createRover([5,5], 'g',5,'N')).toBe("Error: Rover co-ordinates cannot contain characters");
    expect(createRover([5,5],5,'h','E')).toBe("Error: Rover co-ordinates cannot contain characters");
  })
  test("Returns an error if co-ordinates are greater than the plateau dimensions", () => {
    expect(createRover([5,5],6,5,'N')).toBe("Error: Rover co-ordinates have to be less than plateau co-ordinates");
    expect(createRover([5,5],5,6,'E')).toBe("Error: Rover co-ordinates have to be less than plateau co-ordinates");
  })
})
