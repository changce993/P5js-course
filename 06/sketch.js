// rect === rectangulo

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(100);
};

function draw() {
  var x = mouseX;
  var y = mouseY;
  background(160);

  rect(30,30,x-30,y-30,x/3);
};
 