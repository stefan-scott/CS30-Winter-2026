// Challenge: Make a pinwheel class
// Each pinwheel animates with
// a random speed.


// Working with Images
// Mr. Scott
// April 14.2026
// How to load images
// How to play animations

let lionL, lionR;
let dir = "left";

let pinImages = [];
let current = 0; //pinwheel curr index
let pins = [];

async function loadAssets(){
  //load lions
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  //pinwheel images
  for(let i = 0; i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  
}

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
  imageMode(CENTER);  //center referenced images
  //noCursor();
  // frameRate(4);  >> good for debug
}

function draw() {
  background(220);
  //lion();
  //pinwheel(); 
  for(let p of pins){
    p.display();
  }
} //screen update here

function mousePressed(){
  pins.push(new Pinwheel(mouseX, mouseY));
}

function pinwheel(){
  image(pinImages[current], width/2, height*0.7);
  if(frameCount%10===0){ //frame limit logic
    current = (current + 1) % 9;
  }
  
  
  //0, 1, 2, 3, 4, 5, 6, 7, 8, |||| 9, 10, 11, 12..
  // ERROR - you can't animate with FOR loop
  // for(let i = 0; i <=8; i++){
  //   image(pinImages[i], width/2, height * 0.7);
  // }
}


function lion(){
  // update state variable based on mouse movement
  if (movedX < 0) dir = "left";
  else if(movedX >0) dir = "right";

  // interpreting the state variable
  if(dir === "left"){
    image(lionL, mouseX, mouseY,
    lionL.width/2,lionL.height/2);
  }
  else{
    image(lionR, mouseX, mouseY,
      lionL.width/2,lionL.height/2);
  }
}

class Pinwheel{
  constructor(x,y){
    this.x = x; this.y = y;
    this.speed = int(random(2,10));
    this.current = 0;
  }

  display(){
    image(pinImages[this.current], this.x, this.y);
    if(frameCount%this.speed===0){ //frame limit logic
      this.current = (this.current + 1) % 9;
    }
  }
}