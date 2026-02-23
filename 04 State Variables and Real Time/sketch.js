// State Variables and Real Time
// Mr. Scott
// Feb 23, 2026

// Global Variables
let shapeState = 0; //0- Circle    1- Square
                    //2- Triangle  3- Starbust

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawShape();
}

function drawShape(){
  // function inspects the shapeState variable
  // and draws the appropriate shape on the canvas
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;    let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25);
  }
}
