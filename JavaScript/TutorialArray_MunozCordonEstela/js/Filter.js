/**
	Create a function filterNumeric(arr) 
	which takes an array and returns 
	new array which contains only numeric 
	values from arr.

	@author Estela Muñoz Cordón
	@version 1.0if not found.
 */

// ordena personas por la edad, informando de cómo se hace
function filtrar(){
	var contenido = document.getElementById("info"); 
	
	var arr = ["a", 1, "b", 2];

	arr = filterNumeric(arr);

	contenido.innerHTML = '<h1>Filtrar por los valores numéricos</h1>'
		+'<p><strong>Array:</strong> var arr = ["a", 1, "b", 2]</p>'
		+'<p><strong>Filtrar por los números:</strong> </p><ul>';

	for (var i = 0; i < arr.length; i++) {
		contenido.innerHTML += '<li>'+arr[i] +"</li>"; 
	}

	contenido.innerHTML += '</ul></p>';
}	

// Devuelve el array sólo con los números
function filterNumeric(a){
	return a.filter(esNumero);
}

// Comprueba si es un número
function esNumero(elemento){
	if (typeof(elemento) == "number") {
		return true;
	}
	return false;
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	filtrar();
 });