var canvasX = 1024;
var canvasY = 450;
let inconsolata;
var x1=-1000;
var x2=1024;
var y1=-100;
var y2=600;
var x3=0;
var dx=10;
//
var marg = 40; // Margen de movimiento
var pixel = 5; // Medida del modulo de base 
var posX = 40; // Po1sición en X de la esquina superior izquierda del dibujo 
var posY = 300; //Posición en Y de la esquina superior izquierda del dibujo 
var posBX = 40; // 
var posBY = 360;
var shipW = pixel * 15; // Ancho nave 
var shipH = pixel * 16; // Alto nave
// Colores 
var blanco = "#F2F2F2";
var rojo = "#DD0005"; 
var azul = "#0055AC";
var pag2Salida = false;
var contador = 0;
//
var pagina = 1;
var colores = ["yellow","white","orange","red","green","blue"];
var rol_array = ["Contacto", "Dirigido por:", "Con:"];
var nombres_array = ["Extraterrestre", "Alfonso Cuarón M.", "Clive Owen"];

function setup() {
  createCanvas(canvasX, canvasY);
  background("black");
  fill("white");
  textSize(100);
  //
  text(rol_array[0], x1, 100);
  text(nombres_array[0], x2, 200);
}
function draw() {
  background("black");
  if(pagina==1){
  	pagina1();
  } else if (pagina==2) {
  	pagina2();
  } else if (pagina==3) {
  	pagina2Salida();
  } else if (pagina==4) {
  	pagina3();
  }
}
function pagina1() {
	if(x1<300){
		x1+=10;
	} else {
		//console.log(posX);
		if(posX<650){
			posX+=5;
			dibujaNave(posX);
		} else {
			x1+=10;
			x2-=10;
			if(x2<=-400){
				pagina = 2;
			}
		}
	}
	if (x2>200) {
		x2-=10;
	}
	text(rol_array[0], x1, 100);
	text(nombres_array[0], x2, 200);
}
function pagina2() {
	if (y1<200) {
		y1+=2;
		ys1 = y1;
	}
	if (y2>300) {
		y2-=2;
		ys2 = y2;
	}
	if (y1<200 && y2>300 && pag2Salida==false) {
		var x = Math.floor(Math.random()*1000);
		var y = Math.floor(Math.random()*1000);
		var d = Math.floor(Math.random()*1000);
		circle(x, y, d);
		text(rol_array[1], 200, y1);
		text(nombres_array[1], 30, y2);
	} else {
		pagina2Salida();
	}
}
function pagina2Salida() {
	pagina=3;
	if(contador>100){
		ys1-=2;
		ys2+=2;
		if (ys2>800) {
			pagina = 4;
		}
		fill(colores[Math.floor(Math.random()*colores.length)]);
		var x = Math.floor(Math.random()*1000);
		var y = Math.floor(Math.random()*1000);
		var d = Math.floor(Math.random()*1000);
		circle(x, y, d);
	} else {
		contador++;
	}
	text(rol_array[1], 200, ys1);
	text(nombres_array[1], 30, ys2);
}
function pagina3() {
	fill("white");
	text(rol_array[2], 30, 200);
	stroke("white");
	line(x3,0,x3,canvasY);
	if (x3>canvasX || x3 < 0) {
		dx*=-1;
	} 
	x3+=dx;
	fill(colores[Math.floor(Math.random()*colores.length)]);
	stroke("black");
	text(nombres_array[2], 30, 300);
}
function dibujaNave(posX) {
	stroke(255,50); 
	noFill(); 
	rect(posX, posY, shipW,shipH);
	// Nave 
	noStroke(); 
	fill(rojo); 
	rect(posX, posY + pixel * 8, pixel, pixel * 2); 
	// Columna 1 - Rojo 
	fill(blanco); 
	rect(posX, posY + pixel * 10, pixel, pixel * 6); 
	//Columna 1 - Blanco 
	rect(posX + pixel, posY + pixel * 12, pixel, pixel * 3); 
	// Columna 2 
	rect(posX + pixel * 2, posY + pixel * 11, pixel, pixel * 3); 
	// Columna 3 
	fill(rojo);
	rect(posX + pixel * 3, posY + pixel * 5, pixel, pixel * 2); 
	// Columna 4 - Rojo
	fill(blanco); 
	rect(posX + pixel * 3, posY + pixel * 7, pixel, pixel * 2); 
	// Columna 4 - Blanco Superior 
	fill(azul); 
	rect(posX + pixel * 3, posY + pixel * 9, pixel, pixel);
	// Columna 4 - Azul 
	fill(blanco); 
	rect(posX + pixel * 3, posY + pixel * 10, pixel,pixel * 3); 
	// Columna 4 - Blanco Inferior 
	fill(azul); 
	rect(posX + pixel * 4, posY + pixel * 8, pixel, pixel); 
	// Columna 5 - Azul 
	fill(blanco); 
	rect(posX + pixel * 4, posY + pixel * 9, pixel, pixel * 4); 
	// Columna 5 - Blanco 
	fill(rojo); 
	rect(posX + pixel * 4, posY + pixel * 13, pixel, pixel * 2); 
	// Columna 5 - Rojo 
	fill(blanco);
	rect(posX + pixel * 5, posY + pixel * 7, pixel, pixel * 5); 
	// Columna 6 - Blanco
	fill(rojo); 
	rect(posX + pixel * 5, posY + pixel * 12, pixel, pixel * 3); 
	// Columna 6 - Rojo 
	fill(blanco); 
	rect(posX + pixel * 6, posY + pixel * 3, pixel, pixel * 6); 
	// Columna 7 - Blanco Superior 
	fill(azul); 
	rect(posX + pixel * 6, posY + pixel * 9, pixel, pixel * 2); 
	// Columna 7 - Azul 
	fill(blanco); 
	rect(posX + pixel * 6, posY + pixel * 11, pixel, pixel * 3); 
	// Columna 7 - Blanco Inferior 
	rect(posX + pixel * 7, posY, pixel, pixel * 8);
	// Columna 8 - Blanco Superior 
	fill(azul); 
	rect(posX + pixel * 7, posY + pixel * 8, pixel, pixel * 2); 
	// Columna 8 - Azul 
	fill(blanco); 
	rect(posX + pixel * 7, posY + pixel * 10, pixel, pixel * 6); 
	// Columna 8 - Blanco Inferior 
	rect(posX + pixel * 8, posY + pixel * 3, pixel, pixel * 6); 
	// Columna 9 - Blanco Superior 
	fill(azul); 
	rect(posX + pixel * 8, posY+ pixel * 9, pixel, pixel * 2); 
	// Columna 9 - Azul 
	fill(blanco); 
	rect(posX + pixel * 8, posY + pixel * 11, pixel, pixel * 3); 
	// Columna 9 - Blanco Inferior 
	rect(posX + pixel * 9, posY + pixel * 7, pixel, pixel * 5); 
	// Columna 10 - Blanco 
	fill(rojo); rect(posX + pixel * 9, posY + pixel * 12, pixel, pixel * 3); 
	// Columna 10 - Rojo 
	fill(azul);
	rect(posX + pixel * 10, posY + pixel * 8, pixel, pixel); 
	// Columna 11 - Azul
	fill(blanco); 
	rect(posX + pixel * 10, posY + pixel * 9, pixel, pixel * 4); 
	// Columna 11 - Blanco 
	fill(rojo); rect(posX + pixel * 10, posY + pixel * 13, pixel, pixel * 2); 
	// Columna 11 - Rojo 
	rect(posX + pixel * 11, posY + pixel * 5, pixel, pixel * 2); 
	// Columna 12 - Rojo 
	fill(blanco); 
	rect(posX + pixel * 11, posY + pixel * 7, pixel, pixel * 2); 
	// Columna 12 - Blanco Superior 
	fill(azul); 
	rect(posX + pixel * 11, posY + pixel * 9, pixel, pixel); 
	// Columna 12 - Azul 
	fill(blanco); 
	rect(posX + pixel * 11, posY + pixel * 10, pixel, pixel * 3); 
	// Columna 12 - Blanco Inferior
	rect(posX + pixel * 12, posY + pixel * 11, pixel, pixel * 3); 
	// Columna 13
	rect(posX + pixel * 13, posY + pixel * 12, pixel, pixel * 3); 
	// Columna 14
	fill(rojo); 
	rect(posX + pixel * 14, posY + pixel * 8, pixel, pixel * 2); 
	// Columna 15 - Rojo 
	fill(blanco); 
	rect(posX + pixel * 14, posY + pixel * 10, pixel, pixel * 6); 
	// Columna 15 - Blanco 
}
