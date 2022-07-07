// point

var y = 0;
var dy = -5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(100);
  background(160);
};

function draw() {
  var x = mouseX;
  var y = mouseY;
  stroke(color(random(255),random(255),random(255)))
  strokeWeight(random(30))
  point(x,y)
};
 