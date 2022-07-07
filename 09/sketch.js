// quad === cuadrilatero
// quad(x1, y1, x2, y2, x3, y3, x4, y4);

var puntosArray = [];
var puntos = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  background(160);
};

function draw() {
  fill(color(random(255),random(255),random(255)));
};

function mousePressed(){
  if(puntos < 4){
    x = mouseX;
    y = mouseY;
    puntosArray.push(x,y);
    puntos++;
    circle(x,y,5)
    if(puntos == 4){
      quad(
        puntosArray[0],
        puntosArray[1],
        puntosArray[2],
        puntosArray[3],
        puntosArray[4],
        puntosArray[5],
        puntosArray[6],
        puntosArray[7],
      )
    }
  }else {
    puntosArray = [];
    puntos = 0;
    background(160);
  }
}