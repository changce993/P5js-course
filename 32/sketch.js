var forma = true;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background("#07c");
  frameRate(10);
};

function draw() {

}

function mousePressed() {
  background("#07c");
  forma = !forma;
}

function mouseDragged() {
  if(forma){
    var petalos = floor(random(4,10));
    flor(petalos);
  } else { 
    var puntas = floor(random(4,10));
    estrella(puntas);
  }
  return false;
}

function flor(petalos){
  fill(color(random(255),random(255),random(255)))
  var angulo = TWO_PI / petalos;
  var radioInterno = random(10,20);
  var radioExterno = random(30,60);
  var xx = random(20, width-20);
  var yy = random(20, height-20);
  var inicioX = xx+cos(0)*radioInterno;
  var inicioY = yy+sin(0)*radioExterno;
  beginShape();
  vertex(inicioX, inicioY);
  for(var i = 0; i < petalos; i++){
    var cx1 = xx + cos(angulo * i) * radioExterno;
    var cy1 = yy + sin(angulo * i) * radioExterno;
    var x2 = xx + cos(angulo * (i+1)) * radioInterno;
    var y2 = yy + sin(angulo * (i+1)) * radioInterno;
    var cx2 = xx + cos(angulo * (i+1)) * radioExterno;
    var cy2 = yy + sin(angulo * (i+1)) * radioExterno;
    bezierVertex(cx1,cy1,cx2,cy2,x2,y2)
  }
  endShape(CLOSE);
}

function estrella(puntas){
  var vertices = puntas * 2;
  var angulo = TWO_PI / vertices;
  var radioInterno = random(10,40);
  var radioExterno = random(20,60);
  var xx = random(20, width-20);
  var yy = random(20, height-20);
  fill(color(random(255),random(255),random(255)));
  beginShape();
  for(var i = 0; i < vertices; i++){
    var x, y;
    if(i%2 == 0){
      x = cos(angulo*i) * radioExterno;
      y = sin(angulo*i) * radioExterno;
    } else {
      x = cos(angulo*i) * radioInterno;
      y = sin(angulo*i) * radioInterno;
    }
    vertex(x+xx,y+yy);
  }
  endShape(CLOSE);
}