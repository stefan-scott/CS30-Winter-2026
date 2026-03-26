// Planets and Moons
// Mr. Scott
// March 26, 2026

// Globals

//On your own challenge
// Add some style to the planet/moons (color, trail effect)
// Stars in the background → create Star class, use array
// Multiple Planets... which planet gets the moon
// or
// something cool you devise of your own

let myPlanet; 

function setup() {
  noStroke();
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(0,30);
  myPlanet.display();
}

function mousePressed(){
  //regular click -> add moon
  //SHIFT click -> destroy and reset moon
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else myPlanet.createMoon();
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}

class Planet{
  //constructor
  constructor(x,y){
    this.x = x;  this.y = y;  this.s = 180;
    this.moons = [];
  }

  //class methods
  createMoon(){
    this.moons.push(new Moon());
  }

  display(){
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of this.moons){
      m.update(this.x, this.y);
    }

  }
}

class Moon{
  constructor(){
    this.speed = random(1,2.5);  //angular speed
    this.angle = 0;
    this.orbitRadius = random(100,200);
    this.s = random(5,13);
  }

  //class methods
  move(){
    this.angle += this.speed;
  }

  display(x,y){
    push();
    translate(x,y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  update(x,y){
    //helper method to handle all internal
    //method calls.
    this.move();
    this.display(x,y);
  }

}