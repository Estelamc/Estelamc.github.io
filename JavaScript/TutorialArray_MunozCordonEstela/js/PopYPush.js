/**
	1- Create an array styles with elements “Jazz”, “Blues”.
	2- Append a value “Rock’n’Roll”
	3- Replace the second value from tail by “Classic”. The array should become “Jazz”,”Classic”,”Rock’n’Roll”. The code should work for any array length.
	4- Extract the last value from the array and alert it.
 */

// Usa los métodos pop() y push()
function popPush(){
	var contenido = document.getElementById("info"); 
	var estilos = ["Jazz", "Bluez"];

	contenido.innerHTML = 'var estilos = ["Jazz", "Bluez"]';
	recorrerArray(estilos, contenido);
	
	// Añade Rock'n'Roll al final del array
	estilos.push("Rock'n'Roll");
	
	contenido.innerHTML += '<br/>estilos.<strong>push("Rock\'n\'Roll")</strong>';
	recorrerArray(estilos, contenido);
	
	// Reasignar el elemento penúltimo
	estilos[estilos.length-2] = "Classic";

	contenido.innerHTML += '<br/>estilos[estilos.length-2] = "Classic" ';
	recorrerArray(estilos, contenido);

	 // Borra el último elemento y lo devuelve
	contenido.innerHTML += '<br/>estilos.<strong>pop()</strong>: Devuelve: '+estilos.pop();
	recorrerArray(estilos, contenido);	
}

// Muestra el contenido del array
function recorrerArray(a, c){
	c.innerHTML += "<ul>";
	for (var i = 0; i <= a.length-1; i++) {
		c.innerHTML += "<li>"+a[i]+"</li>";
	}
	c.innerHTML += "</ul>";
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	popPush();
 });