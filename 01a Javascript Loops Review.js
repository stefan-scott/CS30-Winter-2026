// Loops Review:

// FOR loop, counting 1 to 10
//  loop var     condition    var modification
for (let num = 1 ; num <= 10 ; num++ ) {
  console.log(num);
}

// FOR loop, loop through a collection
// (array)   LOOP BY ITEM
//               0     1       2      3
let classes = ["ART", "CS", "SPED", "ANI"];

for(let currentClass of classes){
  console.log(currentClass);
}

// snake_case_convention → Python
// camelCaseConvention → C Style Languages
// PascalCaseConvention → Classes, + other things
// SCREAMING_SNAKE_CASE → constants

// While Loop, counting from 10 to 1
let currentNum = 10;
while(currentNum >= 1 ){
  console.log(currentNum);
  currentNum -= 1;
}

