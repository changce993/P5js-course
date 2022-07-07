var stars = 10000;
var num = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background("#07c");
  frameRate(1000);
};

function draw() {
  if(num<stars){
    var puntas = floor(random(4,10));
    estrella(puntas);
    num++;
  }
}

function estrella(puntas){
  var vertices = puntas * 2;
  var angulo = TWO_PI / vertices;
  var radioInterno = random(20,40);
  var radioExterno = random(50,100);
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