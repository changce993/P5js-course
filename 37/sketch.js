let x, y;
let colores = ["black","red","green","orange","purple"];
let color = "#010104";

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(3000);
  background(160);
  x = width / 2;
  y = height / 2;
}

function draw() {
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
  } 
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
  } 
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  } 
  if(keyIsDown(DOWN_ARROW)){
    y += 5;
  }
  background(color);
  circle(x,y,20);
  rect(x,y,20,20)
}
