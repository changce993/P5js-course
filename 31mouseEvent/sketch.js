function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background("#07c");
  frameRate(10);
};

function draw() {

}

function mousePressed() {
  background("#07c");

}

function mouseMoved() {
  var petalos = floor(random(4,10));
  flor(petalos);
  return false;
}

function flor(petalos){
  fill(color(random(255),random(255),random(255)))
  var angulo = TWO_PI / petalos;
  var radioInterno = random(10,20);
  var radioExterno = random(30,60);
  var xx = mouseX // random(20, width-20);
  var yy = mouseY // random(20, height-20);
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