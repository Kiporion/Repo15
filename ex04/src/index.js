const milili = [10, 25, 4]; // DO NOT change this line

function myArr(mili) {
  "use strict";

  //only change code below this line
  mili[0] = 4;
  mili[1] = 10;
  mili[2] = 25;
  // Only change code above this line
  return mili;
}

console.log(myArr(milili)); //change this line
module.exports = myArr;
