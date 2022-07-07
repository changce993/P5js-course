// arc === arco
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
  arc(50,55,50,50,0,HALF_PI, PIE);
  fill(color2);
  arc(50,55,50,50,HALF_PI, PI, PIE);
  fill(color3);
  arc(50,55,50,50,PI, PI + QUARTER_PI, PIE);
  fill(color4);
  arc(50,55,50,50, PI + QUARTER_PI, TWO_PI, PIE);
};
 