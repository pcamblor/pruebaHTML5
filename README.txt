Pablo Camblor Iglesias

TRABAJO CURSO HTML5

- Puzzle: Que coche es?

* Descripción:
	Se ha implementado un juego sencillo en el que se trata de adivinar
	la marca y el modelo de un coche "tapado" por bloques translúcidos
	que el jugador debe ir destapando. (De momento hay sólo dos, de los
	que el programa elige cuál mostrar al azar, pero el programa está 
	diseñado de forma que es fácilmente implementable la inclusión de 
	más modelos).
	
	Finalmente el jugador introducirá la respuesta que crea correcta y, 
	o bien ganará, o podrá seguir intentándolo. La puntuación se regirá 
	por el número de bloques que ha necesitado descubrir, es decir, 
	cuantos menos, mejor.
	
* Tecnologías implementadas:
	* HTML:
		- Inclusión de un tipo de fuente importada de Google Fonts.
		- Utilización de Canvas. Un lienzo para la pantalla principal 
		  del juego y otro para la ayuda.
	
	* Hoja de estilo:
		- Imagen de fondo.
		- Diseño y maquetado del título (utilizando el tipo de fuente 
		  importado) y los botones.
	
	* JavaScript:
		Además de controlar qué debe ejecutarse al presionar los 
		botones ubicados mediante el fichero HTML, y del algoritmo 
		necesario para la correcta ejecución del juego (se ha 
		comentado todo el juego), se ha trabajado con "prompts", 
		alerts, y Canvas, más concretamente:
			Dibujado de rectángulos sin relleno.
			Dibujado de imágenes.
			Inclusión de texto.
		
* Dificultades encontradas y solución adoptada:
	- La primera idea era utilizar la imagen del coche como fondo, 
	  dibujar encima rectángulos y posteriormente borrar cuando el 
	  usuario los fuese pulsando, pero de esta manera se borraba 
	  también el fondo.
	  La solución adoptada fue el punto de vista contrario, dibujar 
	  solo los bloques y, cuando el jugador los pulsara, pintar el 
	  trozo de imagen correspondiente (para ello se han dividido las 
	  imágenes originales.
	  
	- En cuanto a la Ayuda, se pretendía mostrar mediante código HTML
	  y maquetado con CSS, pero no se ha encontrado forma de mostrarla
	  a la derecha del "canvas" principal, por lo que se ha optado por
	  crear un segundo canvas justo al lado e incluir en él el texto.
	  
	- En el botón "volver a jugar" se llamaba a la función "init()" y 
	  se limpiaban las variables "clicks" y "fallos", pero mientras 
	  "fallos" se limpiaba correctamente, en "clicks" se acumulaban los
	  realizados en imágenes anteriores.
	  La solución adoptada, aunque poco elegante, ha sido recargar la 
	  página al pulsar el botón.
	  
* Código literal:
	- No se ha copiado ningún fragmento del código más allá de 
	  ejemplos de uso de algunas propiedades y métodos, modificados 
	  luego para adaptarlos a las necesidades de este proyecto.