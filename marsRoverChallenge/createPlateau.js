//function to create plateau
function createPlateau(x, y){
  console.log("in plateau" + x + " " + y);
  let plateau = [x,y];
  //check if plateau co-ordinates are valid
  if(x === 0 || y === 0){
    return "Error: Co-ordinate cannot be zero";
  }
  if(x < 0 || y < 0){
    return "Error: Co-ordinate cannot be negative";
  }
  if(isNaN(x) || isNaN(y) || x === null || y === null){
    return "Error: Plateau co-ordinates cannot contain characters";
  }
  return plateau;
}

module.exports = {
  createPlateau
}

