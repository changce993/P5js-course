// bezierPoint 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(100);
};

function draw() {
  noFill();
  let x1 = 85, x2 = 10, x3 = 90, x4 = 15;
  let y1 = 20, y2 = 10, y3 = 90, y4 = 80;
  bezier(x1,y1,x2,y2,x3,y3,x4,y4);
  fill(255);
  let steps = 10;
  
  for(let i = 0; i <= steps; i++){
    let t = i / steps;
    let x = bezierPoint(x1,x2,x3,x4,t);
    let y = bezierPoint(y1,y2,y3,y4,t);
    let tx = bezierTangent(x1,x2,x3,x4,t);
    let ty = bezierTangent(y1,y2,y3,y4,t);
    let a = atan2(ty, tx);
    a += PI;
    stroke(255,102,0);
    line(x,y,cos(a) * 30+x, sin(a) * 30+y);
    ellipse(x,y,5,5)
  }
};
