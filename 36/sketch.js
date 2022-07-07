let x, y;
let colores = ["black","red","green","orange","purple"];
let color = "red";

function setup() {
  createCanvas(100,100);
  frameRate(3000);
  background(160);
  x = width / 2;
  y = height / 2;
  circle(x,y,20)
}

function draw() {
  background(color);
  circle(x,y,20);
}

function keyPressed() {
  if(keyCode === LEFT_ARROW){
    if(x>10){
      x -=5;
    }
  }else if(keyCode === RIGHT_ARROW){
    if(x < width-10){
      x+=5;
    }
  }else if(keyCode === UP_ARROW){
    if(y > 10){
      y-=5;
    }
  }else if(keyCode === DOWN_ARROW){
    if(y < height-10){
      y+=5;
    }
  }else if(key === "c"){
    x = width / 2
    y = height / 2
  }else{
    if(key >= "1" && key <= "5"){
      color = colores[key-1];
      background(color);
    }else{
      color = "gray";
    }
  }
}