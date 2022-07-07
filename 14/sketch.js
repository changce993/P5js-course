// smoot & noSmoot

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
};

function draw() {
  strokeWeight(12);
  strokeCap(PROJECT);
  line(20,30,80,30);
  strokeCap(SQUARE);
  line(20,50,80,50);
  strokeCap(ROUND);
  line(20,70,80,70);

  noFill();
  strokeWeight(10);
  strokeJoin(MITER);
  beginShape();
  vertex(135,20);
  vertex(165,50);
  vertex(135,80);
  endShape();

  strokeJoin(BEVEL);
  beginShape();
  vertex(235,20);
  vertex(265,50);
  vertex(235,80);
  endShape();
};
  