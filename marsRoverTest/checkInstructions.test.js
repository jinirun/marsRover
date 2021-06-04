const {
  checkInstructions,
} = require("../marsRoverChallenge/checkInstructions");

describe("checkInstructions", () => {
  test("Returns an error message if the instruction passed is empty", () => {
    expect(() => {
      checkInstructions("");
    }).toThrow("Error: Instruction cannot be empty");
  });

  test.each([["G"], ["LMLMLMGLM"]])
    ("Returns an error message if the instruction contains letters other than L, R or M", (str) => {
    expect(() => {
      checkInstructions(str);
    }).toThrow("Error: Instructions should contain letters L, R and M only");
  });

  test.each([[3], ["LMMRM3L"]])
    ("Returns an error if a number is passed as an instruction", (str) => {
    expect(() => {
      checkInstructions(str);
    }).toThrow("Error: Instruction cannot contain a number");
  });

  it.each([["!"], ["LMMRM&L"]])
    ("Returns an error if a special character is passed as an instruction", (str) => {
    expect(() => {
      checkInstructions(str);
    }).toThrow("Error: Instruction cannot contain special characters");
  });
  
  test("Returns the instructions if all instructions are valid", () => {
    expect(checkInstructions("LMLMLMLMM")).toBe("LMLMLMLMM");
  });
});
