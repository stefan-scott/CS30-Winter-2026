//Write a program that loops through each item (numbers) 
//in an array. 
//If the number is a three, console.log(“three!”)

//          0  1  2  3   4  5   6    7     length: 8
let nums = [1, 2, 3, 99, 3, 33, 100, 3];

//APPROACH ONE:  Loop by item   (looks like python)
// easy/short to code, don't know WHERE
// any particular item is located in the array.
for(let curr of nums){
  if(curr === 3){
    console.log("three");
  }
  else console.log(curr);
}

console.log("--------------------");
//APPROACH TWO:  Loop by index
// since we have an index for each item
// that location data can help with
// removals, or other things...
//   var        condition       var update
for(let i = 0 ; i < nums.length ; i++){
  let curr = nums[i];
  if(curr === 3){
    console.log("three");
  }
  else console.log(curr);
}

