/**
	Create a function ageSort(people) to sort 
	array of people objects by their age.
	Output people names after sorting.

	@author Estela Muñoz Cordón
	@version 1.0if not found.
 */

// ordena personas por la edad, informando de cómo se hace
function ordenar(){
	var contenido = document.getElementById("info"); 
	
	var john = { name: "John Smith", age: 23 }
	var mary = { name: "Mary Key", age: 18 }
	var bob = { name: "Bob-small", age: 6 }

	var people = [john, mary, bob];

	// ordena el array por la edad
	people.sort( function(a,b){ return a.age - b.age } );

	contenido.innerHTML = '<h1>Ordenar personas por la edad</h1>'
		+'<p><strong>Personas (con clases name y age):</strong>'
			+'<ul>'
				+'<li>var john = { name: "John Smith", age: 23 }</li>'
				+'<li>var mary = { name: "Mary Key", age: 18 }</li>'
				+'<li>var bob = { name: "Bob-small", age: 6 }</li>'
			+'</ul></p>'
		+'<p><strong>Array:</strong> var people = [john, mary, bob]</p>'
		+'<p><strong>Ordenar por la edad:</strong> people.sort( function(a,b){ return a.age - b.age } ):'
			+'<ul>';

	for (var i = 0; i < people.length; i++) {
		contenido.innerHTML += '<li>'+people[i].name +"</li>"; // muestra los nombres
	}

	contenido.innerHTML += '</ul></p>';
}	

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	ordenar();
 });