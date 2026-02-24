// Multiple Keypress Detection
// and --- Drawing Practice ---
// date
// Mr. Scott
// 1-line description



//Global Vars - simple data only
//            - no system vars
let centerX;  //declare only

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width/2;
  
}

function checkMulti(){
  // a function to demonstrate how we can check
  // if multiple keyboard buttons are pressed 
  // at once
  strokeWeight(mouseX / 10);
  stroke(255,0,0);

  // check for multiple keypresses (3 simult.)
  let a = keyIsDown(65); //a
  let b = keyIsDown(66); //b
  let c = keyIsDown(67); //c

  let str = "a: " + a + " b: " + b + " c: " + c;
  textSize(40);
  text(str, 100, 300);
}

function draw() {
  background(220);
  //checkMulti();
  text(mouseX+", "+mouseY, mouseX, mouseY)
}
