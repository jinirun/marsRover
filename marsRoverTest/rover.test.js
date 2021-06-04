const { createRover, checkCollision }   = require("../marsRoverChallenge/rover");
const { createPlateau } = require("../marsRoverChallenge/plateau");
const { turnLeft, turnRight, move } = require("../marsRoverChallenge/positioning");

const plateau = [5,5];

describe("createRover", () => {
  test.each([[plateau, "g", 5, "N"], [[5, 5], 5, "h", "E"]])
    ("Returns an error if a character or string is passed as the rover dimension", ([a,b], c, d, e) => {
    expect(() => {
      createRover(([a,b], c, d, e));
    }).toThrow("Error: Rover co-ordinates cannot contain characters");
  });

  test.each([[plateau, 6, 5, "N"], [[5, 5], 5, 6, "E"]])
    ("Returns an error if co-ordinates are greater than the plateau dimensions", ([a,b], c, d, e) => {
    expect(() => {
      createRover([a,b], c, d, e);
    }).toThrow("Error: Rover co-ordinates have to be less than plateau co-ordinates");
  });

  test.each([[plateau, -6, 5, "N"], [[5, 5], 5, -6, "E"]])
    ("Returns an error if co-ordinates are negative", ([a, b], c, d, e) => {
    expect(() => {
      createRover([a, b], c, d, e);
    }).toThrow("Error: Rover co-ordinates cannot be negative");
  });

  test("Returns an error message if the direction passed is empty", () => {
    expect(() => {
      createRover(plateau, 1, 2, "");
    }).toThrow("Error: Rover direction has to be 'N', 'S', 'W' or 'E'");
  });

  test("Returns an error message if the direction passed is not a valid character", () => {
    expect(() => {
      createRover(plateau, 1, 2, "M");
    }).toThrow("Error: Rover direction has to be 'N', 'S', 'W' or 'E'");
  });

  test("Returns an error message if the direction passed is a number", () => {
    expect(() => {
      createRover(plateau, 1, 2, 5);
    }).toThrow("Error: Rover direction cannot be a number");
  });

  test("Returns a rover object if the right co-ordinates and direction are entered", () => {
    expect(createRover(plateau, 1, 2, "N")).toStrictEqual({
      plateauCoordinates: [5, 5],
      xCoordinate: 1,
      yCoordinate: 2,
      direction: "N",
    });
  });
});

describe("checkCollision", () => {
  test("Returns an error message when a possible collision is detected", () => {
    expect(() => {
      checkCollision(
        {
          plateauCoordinates: plateau,
          xCoordinate: 2,
          yCoordinate: 2,
          direction: "N",
        },
        "MMRMRMRM",
        3,
        3
      );
    }).toThrow("Error: Possible collision at co-ordinates 3 3");
  });
  
  test("Returns an empty string when there is no possible collision", () => {
    expect(
      checkCollision(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "N",
        },
        "LMLMLMLMM",
        0,
        0
      )
    ).toBe("");
  });
});

