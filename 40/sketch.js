var puntosArray = [];
var puntos = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  limpiar()
}

function limpiar() {
  background(160);
  textAlign(CENTER);
  textSize(20);
  text("Unir curvas Bezier", 0,10,width,50)
  textSize(14);
  text("Pulse 7 puntos en el lienzo", 0,35,width,50)
}

function draw() {}

function mousePressed() {
  if(puntos < 7) {
    x = mouseX;
    y = mouseY;
    puntosArray.push(x,y);
    puntos++;
    fill(0);
    textSize(12);
    coordenadas = `(${x}, ${y})`;
    text(coordenadas, x-20, y-10);
    circle(x, y, 5);
    fill(color(random(255),random(255),random(255)));

    if(puntos == 7){
      beginShape();
      vertex(puntosArray[0], puntosArray[1]);
      bezierVertex(
        puntosArray[2], puntosArray[3], puntosArray[4],
        puntosArray[5], puntosArray[6], puntosArray[7],
      )
      bezierVertex(
        puntosArray[8], puntosArray[9], puntosArray[10],
        puntosArray[11], puntosArray[12], puntosArray[13],
      )
      endShape();
      fill(0);
      for(var i=0; i<puntosArray.length; i+=2){
        cordenadas = `(${puntosArray[i]}, ${puntosArray[i+1]})`;
        text(coordenadas,puntosArray[i]-20,puntosArray[i+1]-10);
        console.log(i)
      }
    }
  }else {
    puntosArray = [];
    puntos = 0;
    background(160);
    limpiar()
  }
}