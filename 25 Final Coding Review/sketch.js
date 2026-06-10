// Final Review
// Mr. Scott
// June 10, 2026

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

let spirals = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 16; i++){
    if(i<10){
      spiralImages.push(await loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(await loadImage("assets/Circle/circle"+i+".png"));
    } 
  }
  //Gorilla
  for(let i = 1; i <= 6 ; i++){
    gorillaIdle.push(await loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(await loadImage("assets/Gorilla/swipe"+i+".png"));  
  }
}

function draw() {
  background(220);
}
