const { checkCollision } = require("../marsRoverChallenge/checkCollision");
const { createPlateau } = require("../marsRoverChallenge/plateau");

const plateau = [5,5];

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
