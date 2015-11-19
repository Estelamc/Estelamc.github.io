/**
	Make a generic function filter(arr, func) which filters 
	an array using given function.
	
	Only those elements for which func(elem) returns true 
	should compose the result.

	Every element which pass through and returns new array 
	which contains only numeric values from arr.

	@author Estela Muñoz Cordón
	@version 1.0
 */

// borra los valores no numéricos del array y lo muestra
function borrar(){
	var contenido = document.getElementById("info"); 
	
	var arr = ["a", -1, 2, "b"];

	filter(arr, isNumeric);

	contenido.innerHTML = '<h1>Borrar los valores no numéricos usando una función como parámetro</h1>'
		+'<p><strong>Array:</strong> var arr = ["a", -1, 2, "b"]</p>'
		+'<p><strong>Borrados los valores no numéricos:</strong> </p><ul>';

	for (var i = 0; i < arr.length; i++) {
		contenido.innerHTML += '<li>'+arr[i] +"</li>"; 
	}

	contenido.innerHTML += '</ul></p>';
}	

// Borra los valores no numéricos del array
function filter(a, f){
	for (var i = 0; i < a.length; i++) {
		if (!isNumeric(a[i])) { // si no es número
			a.splice(i, 1); // lo borra
		}
	}
}

// comprueba si es un número
function isNumeric(n){    
    if (typeof(n) == "number") { // si es número
        return true;
    }
    else{ // si no es número
        return false;
    }
}   

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	borrar();
 });