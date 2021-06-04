const { createPlateau } = require("../marsRoverChallenge/createPlateau");

//implemented tests to log errors (expect-toThrow)
describe("createPlateau", () => {
  test.each([[0,5], [4,0], [0,0]])
    ("Should return an error for inputs %i %i",(a, b) => {
    expect(() => {
      createPlateau(a, b);
    }).toThrow("Error: Co-ordinate cannot be zero");
  }); 

  test.each([[-1, 4], [6, -3], [-6, -3]])
    ("Returns an error if negative numbers are entered as plateau co-ordinates", (a, b) => {
    expect(() => {
      createPlateau(a, b);
    }).toThrow("Error: Co-ordinate cannot be negative");
  });

  test.each([["y", 5], [9, "l"], ["y", "t"]])
    ("Returns an error if characters are passed as plateau co-ordinates", (a, b) => {
    expect(() => {
      createPlateau(a, b);
    }).toThrow("Error: Plateau co-ordinates cannot contain characters");
  });

  test("Returns co-ordinates if positive numbers are entered", () => {
    expect(createPlateau(5, 5)).toStrictEqual([5, 5]);
  });
});
