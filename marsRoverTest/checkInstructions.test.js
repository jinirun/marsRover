const{
  checkInstructions
} = require("../marsRoverChallenge/checkInstructions");

describe("checkInstructions", () => {
  test("Returns an error message if the instruction passed is empty", () => {
    expect(checkInstructions('')).toBe("Error: Instruction cannot be empty");
  })
  test("Returns an error message if the instruction contains letters other than L, R or M", () => {
    expect(checkInstructions('G')).toBe("Error: Instructions should contain letters L, R and M only");
  })
  test("Returns an error if the instructions contain letters other than L, R or M in a longer list of instructions", () => {
    expect(checkInstructions('LMLMLMGLM')).toBe("Error: Instructions should contain letters L, R and M only");
  })
  test("Returns an error if a number is passed as an instruction", () => {
    expect(checkInstructions(3)).toBe("Error: Instruction cannot contain a number");
  })
  test("Returns an error if a number is passed in a longer list of instructions", () => {
    expect(checkInstructions('LMMRM3L')).toBe("Error: Instruction cannot contain a number");
  })
  test("Returns an error if a special character is passed as an instruction", () => {
    expect(checkInstructions('!')).toBe("Error: Instruction cannot contain special characters");
  })
  test("Returns an error if a special character is passed in a longer list of instructions", () => {
    expect(checkInstructions('LMMRM&L')).toBe("Error: Instruction cannot contain special characters");
  })
})
