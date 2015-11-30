/**
	Create a function filterNumericInPlace(arr) which takes an array and removes all non-numeric values from it.

	An example of how it should work:
	show clean source in new windowHide/show line numbersprint highlighted code
	
		arr = ["a", 1, "b", 2];		 
		
		filterNumericInPlace(arr);	 
		
		alert(arr)  // [1,2]

	@author Estela Muñoz Cordón
	@version 1.0
 */

// borra los valores no numéricos del array y lo muestra
function borrar(){
	var contenido = document.getElementById("info"); 
	
	var arr = ["a", 1, "b", 2];

	filterNumericInPlace(arr);

	contenido.innerHTML = '<h1>Borrar los valores no numéricos</h1>'
		+'<p><strong>Array:</strong> var arr = ["a", 1, "b", 2]</p>'
		+'<p><strong>Borrados los valores no numéricos:</strong> </p><ul>';

	for (var i = 0; i < arr.length; i++) {
		contenido.innerHTML += '<li>'+arr[i] +"</li>"; 
	}

	contenido.innerHTML += '</ul></p>';
}	

// Borra los valores no numéricos del array
function filterNumericInPlace(a){
	for (var i = 0; i < a.length; i++) {
		if (typeof(a[i]) != "number") { // si no es número
			a.splice(i, 1); // lo borra
		}
	}
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	borrar();
 });