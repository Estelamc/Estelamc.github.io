/**
	Ejemplo de uso de ForEach()

	@author Estela Muñoz Cordón
	@version 1.0
 */

// borra los valores no numéricos del array y lo muestra
function usandoForEach(){
	var contenido = document.getElementById("info"); 
	
	var arr = [1, 2, 3];	

	contenido.innerHTML = '<h1>Método ForEach()</h1>'
		+'<p><strong>Array:</strong> var arr = [1, 2, 3];</p>'
		+'<p><strong>Recorriéndolo con ForEach:</strong> </p><ul>';

	arr.forEach(function(valor){
		contenido.innerHTML += '<li>'+valor+"</li>"; 
	});

	contenido.innerHTML += '</ul></p>';
}	

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	usandoForEach();
 });