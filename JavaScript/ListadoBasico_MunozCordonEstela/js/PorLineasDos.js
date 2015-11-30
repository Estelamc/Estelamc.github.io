/** 
	Implementa PorLineas que visualice los números del 0 al 100 separados por comas. 
	Cada múltiplo de 7 o finalizado en 7 ha de comenzar en una nueva línea.

	@author Estela Muñoz Cordón
	@version 1.0
*/

function deCeroACien(){
	document.open();
	document.write("<p>Muestra los números del 0 al 100:</p>");
	for (var i = 0; i <= 99; i++) {
		if (i % 7 == 0 || /^[0-9]+7$/.test(i)) {
			document.write("<br/>"+i+", ");
		}
		else{
			document.write(i+", ");
		}		
	}
	document.write("100.");
	document.close();
}