function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  background("#010104");
  fill("#fdfdff");
  x = width / 2;
  y = height / 2;
}

function draw() {
  background("#010104");
  textSize(40)
  textAlign(CENTER)
  coordenadas = `x: ${mouseX}, ${mouseY}`;
  text(coordenadas,mouseX,mouseY);
}
