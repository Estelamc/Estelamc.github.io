/** 
	Implementa Piramide que mediante un blucle 
	for visualice una pirámide.

	@author Estela Muñoz Cordón
	@version 1.0
*/

function piramide(){
	document.open();
	document.write("<p>Muestra una pirámide numérica:</p>");
	for (var i = 1; i <= 10; i++) { // va del 1 al 10
		for (var j = 1; j <= i; j++) { // para que tenga la longitud de i (número en cuestión)
			if (i == 10) {
				document.write("0 "); // el 10 no existe, la última fila es 0
			}
			else{
				document.write(i+" "); // Se imprime i tantas veces como cantidad sea éste
			}			
		}
		document.write("<br />");	
	}
	document.close();
}