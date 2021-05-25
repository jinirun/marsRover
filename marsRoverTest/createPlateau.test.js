const{
    createPlateau
} = require("../marsRoverChallenge/createPlateau");

describe("createPlateau", () => {
  test("Returns an error if 0 is passed as the co-ordinate", () => {
    expect(createPlateau(0, 5)).toBe("Error: Co-ordinate cannot be zero");
    expect(createPlateau(4, 0)).toBe("Error: Co-ordinate cannot be zero");
    expect(createPlateau(0, 0)).toBe("Error: Co-ordinate cannot be zero");
  })
  test("Returns an error if negative numbers are entered as plateau co-ordinates", () => {
    expect(createPlateau(-1, 4)).toBe("Error: Co-ordinate cannot be negative");
    expect(createPlateau(6, -3)).toBe("Error: Co-ordinate cannot be negative");
    expect(createPlateau(-6, -3)).toBe("Error: Co-ordinate cannot be negative");
  })
  test("Returns an error if characters are passed as plateau co-ordinates", () => {
    expect(createPlateau('y', 5)).toBe("Error: Plateau co-ordinates cannot contain characters");
    expect(createPlateau(9, 'l')).toBe("Error: Plateau co-ordinates cannot contain characters");
    expect(createPlateau('y', 't')).toBe("Error: Plateau co-ordinates cannot contain characters");
  })
  test("Returns co-ordinates if positive numbers are entered", () => {
    expect(createPlateau(5, 5)).toStrictEqual([5,5]);
  })

})
