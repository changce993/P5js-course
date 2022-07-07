var pos = 25;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  frameRate(3000);
  background(160)
}

function draw() {
  background(160);
  fill(0);
  rect(25,pos,350,50);
}

function mouseWheel(e) {
  if(e.delta > 0){
    pos -= 5;
  }else{
    pos+=5;
  }
  return false
}