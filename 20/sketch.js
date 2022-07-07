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
  if(puntos < 7){
    x = mouseX;
    y = mouseY;
    puntosArray.push(x,y);
    puntos++;
    circle(x,y,5)
    if(puntos == 7){
      beginShape();
      vertex(puntosArray[0], puntosArray[1])
      bezierVertex(
        puntosArray[2], puntosArray[3], puntosArray[4],
        puntosArray[5], puntosArray[6], puntosArray[7],
      )
      bezierVertex(
        puntosArray[8], puntosArray[9], puntosArray[10],
        puntosArray[11], puntosArray[12], puntosArray[13],
      )
      endShape();
    }
  }else {
    puntosArray = [];
    puntos = 0;
    background(160);
  }
}