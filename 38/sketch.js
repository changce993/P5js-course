let x, y, r = 100;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(3000);
  background("#010104");
  x = width / 2;
  y = height / 2;
}

function draw() {
  circle(x,y,r)
}

function keyPressed() {
  fill("#07c")
  background("#010104");
  r += 100;
}

function keyReleased() {
  fill("#07c")
  background("#010104");
  r -= 50;
}