/** 
	Implementa ProductoPotencias que calcule y 
	visualice el producto de las potencias de 2 
	entre 0 y 10.

	@author Estela Muñoz Cordón
	@version 1.0
*/

function potencia(){
	var resultado=1;
	document.open();
	document.write("<p>Muestra el producto de las potencias de 2 de 0 a 10:</p>");
	document.write("<p><strong>Potencias de 2 de 0 a 10:</strong></p>");
	for (var i = 0; i <= 10; i++) {
		document.write(Math.pow(2, i)+", ");
		resultado *= Math.pow(2, i);
	}
	document.write("<p><strong>Resultado del producto de las potencias:</strong> "+resultado+".</p>");
	document.close();
}