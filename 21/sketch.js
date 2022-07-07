var puntosArray = [];
var puntos = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
};

function draw() {
  fill(color(random(255),random(255),random(255)));
};

function mousePressed(){
  noFill();
  if(puntos < 10){
    x = mouseX;
    y = mouseY;
    puntosArray.push(x,y);
    puntos++;
    circle(x,y,5)
    if(puntos == 10){
     beginShape();
     for(var i = 0; i < puntosArray.length; i+=2){
       curveVertex(puntosArray[i], puntosArray[i+1]);
       circle(puntosArray[i], puntosArray[i+1], 5)
     }
     endShape()
    }
  }else {
    puntosArray = [];
    puntos = 0;
    background(160);
  }
}