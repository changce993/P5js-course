// rectMode === Modo de rectangulo

var color1, color2, color3, color4;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  background(160);
  color1 = color(random(255),random(255),random(255));
  color2 = color(random(255),random(255),random(255));
  color3 = color(random(255),random(255),random(255));
  color4 = color(random(255),random(255),random(255));
};

function draw() {
  fill(color3);
  rectMode(CORNER);
  rect(30,30,50,50);

  fill(color4);
  rectMode(CORNERS);
  rect(30,30,60,60);

  fill(color1);
  rectMode(RADIUS);
  rect(60,150,30,30);

  fill(color2);
  rectMode(CENTER);
  rect(60,150,30,30);
};
