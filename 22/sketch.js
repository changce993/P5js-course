var puntosArray = [];
var puntos = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
};

function draw() {
  noFill();
  strokeWeight(1);
  beginShape();
  vertex(20,20);
  quadraticVertex(80,20,50,50);
  quadraticVertex(20,80,80,80);
  quadraticVertex(70,70,80,60);
  circle(20,20,5);
  circle(80,20,5);
  circle(50,50,5);
  circle(20,80,5);
  circle(80,80,5);
  circle(80,60,5);
  endShape();
};
