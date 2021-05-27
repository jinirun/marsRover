const {
  checkInstructions,
} = require("../marsRoverChallenge/checkInstructions");

describe("checkInstructions", () => {
  test("Returns an error message if the instruction passed is empty", () => {
    expect(() => {
      checkInstructions("");
    }).toThrow("Error: Instruction cannot be empty");
  });
  test("Returns an error message if the instruction contains letters other than L, R or M", () => {
    expect(() => {
      checkInstructions("G");
    }).toThrow("Error: Instructions should contain letters L, R and M only");
  });
  test("Returns an error if the instructions contain letters other than L, R or M in a longer list of instructions", () => {
    expect(() => {
      checkInstructions("LMLMLMGLM");
    }).toThrow("Error: Instructions should contain letters L, R and M only");
  });
  test("Returns an error if a number is passed as an instruction", () => {
    expect(() => {
      checkInstructions(3);
    }).toThrow("Error: Instruction cannot contain a number");
  });
  test("Returns an error if a number is passed in a longer list of instructions", () => {
    expect(() => {
      checkInstructions("LMMRM3L");
    }).toThrow("Error: Instruction cannot contain a number");
  });
  test("Returns an error if a special character is passed as an instruction", () => {
    expect(() => {
      checkInstructions("!");
    }).toThrow("Error: Instruction cannot contain special characters");
  });
  test("Returns an error if a special character is passed in a longer list of instructions", () => {
    expect(() => {
      checkInstructions("LMMRM&L");
    }).toThrow("Error: Instruction cannot contain special characters");
  });
  test("Returns the instructions if all instructions are valid", () => {
    expect(checkInstructions("LMLMLMLMM")).toBe("LMLMLMLMM");
  });
});
