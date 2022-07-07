var y = 0;

function setup() {
  createCanvas(200, 200);
  frameRate(100);
};

function draw() {
  background("#aaa");
  y-=5;
  if(y < 0) y = height;
  line(0,y,height,y)
};
