/** 	
	Implementa DeSieteEnSiete que escriba las números del 100 
	al 0 de 7 en 7.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function deSieteEnSiete(){
	document.open();
	document.write("<p>Muestra los números del 100 al 0 de 7 en 7:</p>");
	for (var i = 100; i >= 9; i=i-7) {
		document.write(i+", ");
	}
	document.write("2.");
	document.close();
}