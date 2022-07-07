// square === cuadrado

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // frameRate(1); // 1 cuadro por segundo
  frameRate(60); // 60 cuadros por segundo
  background(160);
};

function draw() {
  fill(color(random(255),random(255),random(255)));
  noStroke();
  square(random(width),random(height),random(width)/5);
};
 