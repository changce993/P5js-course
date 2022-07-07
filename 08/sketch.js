// circle === circulo

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  background(160);
};

function draw() {
  fill(color(random(255),random(255),random(255)));
  line(1,200,width,200);
  line(1,400,width,400);
  noStroke();
};

function mousePressed(){
  // x = 50+random(width-100);
  // y = 50+random(100);

  x = mouseX;
  y = mouseY;
  if(mouseY < 200) circle(x,y,50);
  if(mouseY > 200 && mouseY < 400) ellipse(x,y,100,50);
  if(mouseY >=400) triangle(x,y,x+28,y-50,x+28*2,y);
}