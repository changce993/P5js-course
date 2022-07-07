// smoot & noSmoot

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(160);
};

function draw() {
  noFill();
  beginShape();
  vertex(30,20);
  vertex(85,20);
  vertex(85,75);
  vertex(30,75);
  endShape(CLOSE);

  beginShape(POINTS);
  vertex(130,20);
  vertex(185,20);
  vertex(185,75);
  vertex(130,75);
  endShape();

  beginShape(LINES);
  vertex(230,20);
  vertex(285,20);
  vertex(285,75);
  vertex(230,75);
  endShape();

  beginShape();
  vertex(330,20);
  vertex(385,20);
  vertex(385,75);
  vertex(330,75);
  endShape();

  beginShape(TRIANGLES);
  vertex(30,175);
  vertex(40,120);
  vertex(50,175);
  vertex(60,120);
  vertex(70,175);
  vertex(80,120);
  endShape();

  beginShape(TRIANGLE_STRIP);
  vertex(130,175);
  vertex(140,120);
  vertex(150,175);
  vertex(160,120);
  vertex(170,175);
  vertex(180,120);
  vertex(190,175);
  endShape();

  beginShape(TRIANGLE_FAN);
  vertex(257,150);
  vertex(257,115);
  vertex(292,150);
  vertex(257,185);
  vertex(222,150);
  vertex(257,115);
  endShape();

  beginShape(QUADS);
  vertex(30,220);
  vertex(30,275);
  vertex(50,275);
  vertex(50,220);

  vertex(65,220);
  vertex(65,275);
  vertex(85,275);
  vertex(85,220);
  endShape();

  beginShape(QUAD_STRIP);
  vertex(130,220);
  vertex(130,275);
  vertex(150,220);
  vertex(150,275);
  vertex(165,220);
  vertex(165,275);
  vertex(185,220);
  vertex(185,275);
  endShape();
};
  