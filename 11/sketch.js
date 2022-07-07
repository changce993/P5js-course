// ellipseMode === Modo de elipse
// arc(x,y,w,h,start,stop,[modo],[detail]);

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
  fill(color1);
  ellipseMode(RADIUS);
  ellipse(50,50,30,20);

  fill(color2);
  ellipseMode(CENTER);
  ellipse(50,50,30,20);

  fill(color3);
  ellipseMode(CORNER);
  ellipse(50,150,30,20);

  fill(color4);
  ellipseMode(CORNERS);
  ellipse(50,50,30,120);
};
