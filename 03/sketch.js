// mousePressed & mouseReleased`

var y = 0;
var dy = -5;

function setup() {
  createCanvas(200, 200);
  frameRate(100);
};

function draw() {
  background("#aaa");
  y+=dy;
  if(y < 0) y = height;
  if(y > height) y = 0;
  line(0,y,height,y)
};

function mousePressed(){
  noLoop();
};

function mouseReleased(){
  loop();
  dy *= -1
};