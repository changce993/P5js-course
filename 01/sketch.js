var x = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background("#11111e");
};

function draw() {
  // line(30,20,185,185);

  stroke(0);
  line(30,20,185,20);

  stroke("#404040");
  line(185,20,185,185);

  stroke("rgb(200,200,200)");
  line(185,185,30,185);

  stroke(color(255));
  line(30,185,30,20);

  strokeWeight(x);
  if(x < 30) x++;
};
