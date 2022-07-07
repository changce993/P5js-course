let fuente;

function preload() {
  fuente = loadFont("BingBamBoum.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#070d10");
  fill("#fdfdff");
  textFont(fuente);
  textSize(36);
  text("HEY", 10, 50);
}