var x, y;

function setup() {
  createCanvas(100,100);
  frameRate(3000);
  background(160);
  x = width / 2;
  y = height / 2;
  circle(x,y,20)
}

function draw() {
  background(160);
  fill(0);
  circle(x,y,20);
}

function keyTyped() {
  if(key === "a"){
    if(x>10){
      x -=5;
    }
  }else if(key === "d"){
    if(x < width-10){
      x+=5;
    }
  }else if(key === "w"){
    if(y > 10){
      y-=5;
    }
  }else if(key === "s"){
    if(y < height-10){
      y+=5;
    }
  }else if(key === "c"){
    x = width / 2
    y = height / 2
  }
}