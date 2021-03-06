//function to check for valid instructions
function checkInstructions(instructions) {
  let validInstructions = ["L", "R", "M"];
  let hasNumber = /\d/;
  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let str = "";

  if (instructions === "") {
    throw new Error("Error: Instruction cannot be empty");
  }

  if (hasNumber.test(instructions)) {
    throw new Error("Error: Instruction cannot contain a number");
  }

  if (format.test(instructions)) {
    throw new Error("Error: Instruction cannot contain special characters");
  }

  str = instructions.split("");

  for (let i = 0; i < str.length; i++) {
    if (!validInstructions.includes(str[i])) {
      throw new Error(
        "Error: Instructions should contain letters L, R and M only"
      );
    }
  }
  
  return instructions;
}

module.exports = {
  checkInstructions,
};
