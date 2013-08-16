window.addEventListener('load',init,false);
var canvas=null,ctx=null; // Canvas principal
var canvas2=null,ctx2=null; // Canvas en el que se muestra la ayuda
var img = new Image(); // utilizada para insertar imágenes en el canvas principal
var imagen = null; // indica el coche elegido al azar
var solucion1 = "seat leon";
var solucion2 = "renault megane";
var solucion = null;  // la introducida por el usuario
var clicks = 0; // para mostrar la "puntuación" al usuario
var fallos = 0; //
var vayuda = false; // para mostrar/ocultar la ayuda

function init(){ // inicializar canvas
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    paint(ctx);
}

function paint(ctx){ 
	imagen= Math.floor(Math.random() * 2) + 1; // Se elige imagen al azar entre las disponibles (en este caso 2)
	img.src = "imagenes/imagen"+imagen+"/imagen.jpg"; // Se carga la imagen "borrosa" del coche corrspondiente
	img.onload = function(){ // Para que cargue la imagen correctamente
         ctx.drawImage(img, 0, 00);
		 for (i=0; i<4; i++)                       //
		   for (j=0; j<3; j++)                     // Se dibuja la "matriz" de rectángulos a pulsar
			 ctx.strokeRect(i*256,j*200,256,200);  //
    }
   click(imagen);
}

function click(imagen){ 
 canvas.addEventListener("click",   
  function(e){ // Función que se ejecuta al pulsar
   clicks = clicks+1;
   var x = Math.floor(((e.clientX-canvas.offsetLeft)/256)+1); // De esta forma se obtienen las coordenadas del rectángulo
   var y = Math.floor(((e.clientY-canvas.offsetTop)/200)+1);  // correspondiente al punto donde ha clickado el usuario
   img.src = "imagenes/imagen"+imagen+"/imagen"+x+y+".gif"; // Se carga la imagen correspondiente a la zona que ocupa
   img.onload = function(){
         ctx.drawImage(img, (x-1)*256, (y-1)*200); // Se pinta la imagen
   }
 }, false);
}


function reiniciar(elemento) {
  document.location.reload(); // Se recarga la página al pulsar "Volver a jugar" (explicación en el ReadMe)
}

function ayuda(elemento) { // Al pulsar el botón de ayuda
  canvas2=document.getElementById('canvas2');
  ctx2=canvas2.getContext('2d');
  if (vayuda)  // En función de si debe mostrar u ocultar la Ayuda
  {
	vayuda = false;
	ctx2.clearRect(0, 0, 200, 600);
  }
  else
  {
	vayuda = true;
	ctx2.font = "bold 22px sans-serif";
	ctx2.strokeText("Ayuda:", 8, 25);
	ctx2.font = "bold 14px sans-serif";
	ctx2.strokeText("- Pulse sobre los recuadros", 8, 75);
	ctx2.strokeText("  delimitados por la linea", 8, 100);
	ctx2.strokeText("  negra. Un solo click por", 8, 125);
	ctx2.strokeText("  recuadro.", 8, 150);
	ctx2.strokeText("- Cuando crea saber la", 8, 200);
	ctx2.strokeText("  marca y el modelo del", 8, 225);
	ctx2.strokeText("  coche, pulse Solucionar.", 8, 250);
	ctx2.strokeText("- Para ocultar la ayuda,", 8, 300);
	ctx2.strokeText("  presione de nuevo sobre", 8, 325);
	ctx2.strokeText("  el boton de Ayuda.", 8, 350);
	
	ctx2.fillStyle="rgb(255,191,0)";
	ctx2.font = "bold 22px sans-serif";
	ctx2.fillText("Ayuda:", 8, 25);
	ctx2.font = "bold 14px sans-serif";
	ctx2.fillText("- Pulse sobre los recuadros", 8, 75);
	ctx2.fillText("  delimitados por la linea", 8, 100);
	ctx2.fillText("  negra. Un solo click por", 8, 125);
	ctx2.fillText("  recuadro.", 8, 150);
	ctx2.fillText("- Cuando crea saber la", 8, 200);
	ctx2.fillText("  marca y el modelo del", 8, 225);
	ctx2.fillText("  coche, pulse Solucionar.", 8, 250);
	ctx2.fillText("- Para ocultar la ayuda,", 8, 300);
	ctx2.fillText("  presione de nuevo sobre", 8, 325);
	ctx2.fillText("  el boton de Ayuda.", 8, 350);
	
  }
}

function solucionar(elemento) { // Al pulsar "Solucionar"
 solucion = prompt('Introduce la marca y modelo en minusculas y sin tildes: ');
 switch (imagen)
 {
	case 1:
		if (solucion!=null)
		{
			if (solucion == solucion1)
			{
				alert("Correcto! Clicks requeridos: "+clicks+"  Fallos: "+fallos);
				img.src = "imagenes/imagen1/imagen2.jpg";
				img.onload = function(){ // En caso de acierto se muestra la imagen completa nítida
				ctx.drawImage(img, 0, 0);
				}
			}
			else
			{
				fallos = fallos+1;
				alert("Vuelve a intentarlo. Clicks: "+clicks+"  Fallos: "+fallos);
			}
		}
		break;
	case 2:
		if (solucion!=null)
		{
			if (solucion == solucion2)
			{
				alert("Correcto! Clicks requeridos: "+clicks+"  Fallos: "+fallos);
				img.src = "imagenes/imagen2/imagen2.jpg";
				img.onload = function(){
				ctx.drawImage(img, 0, 0);
				}
			}
			else
			{
				fallos = fallos+1;
				alert("Vuelve a intentarlo. Clicks: "+clicks+"  Fallos: "+fallos);
			}
		}
		break;
 }
}