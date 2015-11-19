/**
	Create a function camelize(str) which transforms a string 
	from “my-short-string” to “myShortString”.

	So, all parts after a hyphen become camelcased instead. 
	For instance:

		camelize("background-color") == 'backgroundColor'
		camelize("list-style-image") == 'listStyleImage'
	
	Such function may be useful when operating with CSS.

	Note. Remember charAt, substr and check str.toUpperCase() 
	function which transforms the string to upper case.

	@author Estela Muñoz Cordón
	@version 1.0if not found.
 */

// muestra el resultado de la transformación de las cadenas
function transformar(){
	var contenido = document.getElementById("info"); 
	
	var cadena1 = "background-color";
	var cadena2 = "list-style-image";

	contenido.innerHTML = '<h1>Transformar cadenas</h1>'
		+'<p><strong>Cadena 1:</strong> var cadena1 = "background-color"</p>'
		+'<p><strong>Transformación:</strong> <u>'+camelize(cadena1)+'</u></p>'
		+'<p><strong>Cadena 2:</strong> var cadena2 = "list-style-image"</p>'
		+'<p><strong>Transformación:</strong> <u>'+camelize(cadena2)+'</u></p>';
}	

// Transforma una cadena usando join() y split()
function camelize(str){
	str = str.split(""); // array de los caracteres
	
	for (var i = 0; i < str.length; i++) {
		if(str[i] == "-"){ // si es un guión
			str[i+1] = str[i+1].toUpperCase(); // el siguiente a mayúsculas
		}
	}

	str = str.join(""); // volvemos a unirlo en una cadena
	str = str.split("-"); // array de las palabras entre guiones
	return str.join(""); // volvemos a unirlo en una cadena (ya todo ok)
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	transformar();
 });