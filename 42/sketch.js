function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#f1f1ff");

  let base = height * 0.75;
  let scalar = 0.8;

  textSize(32);
  let asc = textAscent() * scalar;

  line(0, base - asc, 110, base - asc);
  text("dp", 0, base);

  textSize(64);
  asc = textAscent() * scalar;
  line(40, base - asc, 110, base - asc);
  text("dp", 40, base);
  
  textSize(32);
  let desc = textDescent() * scalar;
  line(120, base + desc, 220, base + desc)
  text("dp", 120,base);

  let lineas = 'L1\nL2\nL3';;
  textSize(12);

  textLeading(10);
  text(lineas, 250, 50);

  textLeading(20);
  text(lineas, 280, 50);

  textLeading(30);
  text(lineas, 310, 50);
}