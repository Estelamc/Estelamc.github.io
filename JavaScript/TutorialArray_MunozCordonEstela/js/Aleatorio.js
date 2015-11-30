/**
	Write a code to alert a random value from array arr:
		var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"]
	
	P.S. The code to get a random integer from min to max (inclusive) is:
		var rand = min + Math.floor(Math.random()*(max+1-min))

 */

// Usa los métodos pop() y push()
function valorAleatorio(){
	var contenido = document.getElementById("info"); 
	var arr = ["Plum", "Orange", "Donkey", "Carrot", "JavaScript"];
	var rand = Math.floor(Math.random()*arr.length);

	contenido.innerHTML = '<h1>Valor aleatorio</h1>'
		+'<p><strong>Array:</strong> var arr = ["Plum", "Orange", "Donkey", "Carrot", "JavaScript"]</p>'
		+'<p><strong>Número aleatorio:</strong> var rand = Math.floor(Math.random()*arr.length)</p>'
		+'<p><strong>Valor aleatorio:</strong> arr[rand]: <u>'+arr[rand]+'</u></p>';
}	

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	valorAleatorio();
 });