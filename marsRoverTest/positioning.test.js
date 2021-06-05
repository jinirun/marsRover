const { finalPosition } = require("../marsRoverChallenge/positioning");
const { createPlateau } = require("../marsRoverChallenge/plateau");

const plateau = createPlateau(5,5);

//We assume all input is validated and tested for errors in earlier functions
describe("finalPosition", () => {
  test("If L is received, the Rover should turn 90 degrees to left and return the resulting direction", () => {
    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "N",
        },
        "L"
      )
    ).toBe("1 2 W");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "W",
        },
        "L"
      )
    ).toBe("1 2 S");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "S",
        },
        "L"
      )
    ).toBe("1 2 E");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "E",
        },
        "L"
      )
    ).toBe("1 2 N");
  });

  test("If R is received, the Rover should turn 90 degrees to right and return the resulting direction", () => {
    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "N",
        },
        "R"
      )
    ).toBe("1 2 E");

    expect(
      finalPosition(
        {
          plateauCoordinates: [5, 5],
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "W",
        },
        "R"
      )
    ).toBe("1 2 N");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "S",
        },
        "R"
      )
    ).toBe("1 2 W");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "E",
        },
        "R"
      )
    ).toBe("1 2 S");
  });

  test("If M is received, the Rover should move by one grid and return new co-ordinates in the same direction", () => {
    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "N",
        },
        "M"
      )
    ).toBe("1 3 N");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 3,
          yCoordinate: 2,
          direction: "E",
        },
        "M"
      )
    ).toBe("4 2 E");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "S",
        },
        "M"
      )
    ).toBe("1 1 S");
  });

  test("Returns the final position of the Rover when a series of instructions is passed", () => {
    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 3,
          yCoordinate: 3,
          direction: "E",
        },
        "MMRMMRMRRM"
      )
    ).toBe("5 1 E");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 1,
          yCoordinate: 2,
          direction: "N",
        },
        "LMLMLMLMM"
      )
    ).toBe("1 3 N");

    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 2,
          yCoordinate: 2,
          direction: "N",
        },
        "MMRMRMRM"
      )
    ).toBe("2 3 W");
    
    expect(
      finalPosition(
        {
          plateauCoordinates: plateau,
          xCoordinate: 2,
          yCoordinate: 2,
          direction: "N",
        },
        "MMLMRMRM"
      )
    ).toBe("2 5 E");
  });
});
