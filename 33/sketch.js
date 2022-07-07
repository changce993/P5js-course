var d, m;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
  frameRate(30);
}

function draw() {}

function mousePressed() {
  if(mouseButton == RIGHT){
    background(160)
  }
}

function mouseMoved() {
  stroke(0,64);
  strokeWeight(1);
  fill(255,32);
  d = dist(mouseX, mouseY, pmouseX, pmouseY);
  constrain(d,8,100);
  ellipse(mouseX, mouseY, d, d);
}

function mouseDragged() {
  stroke(0);
  d = dist(mouseX, mouseY, pmouseX, pmouseY);
  constrain(d,0,100);
  w = map(d,0,100,1,10);
  strokeWeight(w);
  line(mouseX, mouseY, pmouseX, pmouseY)
}

function mouseReleased() {
  noStroke();
  fill(255,80);
  rect(0,0,width, height);
}

function mouseClicked() {
  fill(255,0,0,50);
  d = random(20,200);
  ellipse(mouseX, mouseY, d, d)
}