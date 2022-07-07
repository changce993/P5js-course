// quad === cuadrilatero
// quad(x1, y1, x2, y2, x3, y3, x4, y4);

let steps = 30;
let punto = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
};

function draw() {
  noFill();
  curve(5,26,73,24,73,61,15,65);
};

function mousePressed(){
  let t = punto / steps;
  let x = curvePoint(5,73,73,15,t);
  let y = curvePoint(26,24,61,65,t); 
  ellipse(x,y,2,2);

  let tx = curveTangent(5,73,73,15,t);
  let ty = curveTangent(26,24,61,65,t);
  let a = atan2(ty, tx);
  // a -= PI/2;
  line(x,y,cos(a)*20+x,sin(a)*20+y);
  line(x,y,cos(a)*-20+x,sin(a)*-20+y);
  if(punto<steps){
    punto++;
  }
}
