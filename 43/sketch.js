var puntosArray = [];
var puntos = 0;
var cadena = "Hola Mundo";
var steps = cadena.length;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#010104");
  frameRate(60);
}

function draw(){}

function mousePressed() {
  if(puntos < 4) {
    x = mouseX;
    y = mouseY;
    puntosArray.push(x,y);
    puntos++;
    circle(x,y,5);

    if(puntos==4){
      bezier(
        puntosArray[0], puntosArray[1], puntosArray[2],
        puntosArray[3], puntosArray[4], puntosArray[5],
        puntosArray[6], puntosArray[7]
      )
      fill(color(random(255),random(255),random(255)));
      background("#010104");
      textSize(32);
      for(var i = 0; i < steps; i++){
        var t = i / steps;
        var x = bezierPoint(puntosArray[0], puntosArray[2], puntosArray[4], puntosArray[6], t)
        var y = bezierPoint(puntosArray[1], puntosArray[3], puntosArray[5], puntosArray[7], t)
        text(cadena[i], x, y);
      }
    }
  } else {
    puntosArray = [];
    puntos = 0;
    background("#010104")
  }
}