/** 
	Implementa PiramideDos que mediante un blucle 
	for visualice una pirámide.

	@author Estela Muñoz Cordón
	@version 1.0
*/

function piramide(){
	document.open();
	document.write("<p>Muestra una pirámide numérica:</p>");
	for (var i = 1; i <= 10; i++) { // va del 1 al 10
		for (var j = 1; j <= i; j++) { // para que tenga la longitud de i (número en cuestión)
			if (j == 10) { // el 10 no existe, debe acabar en 0
				document.write("0 ");
			}
			else{
				document.write(j+" "); // me muestra la secuencia de números
			}			
		}
		document.write("<br />");	
	}
	document.close();
}