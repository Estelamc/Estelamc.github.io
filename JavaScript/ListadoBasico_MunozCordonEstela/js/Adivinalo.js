/** 	
	1.Implementa el juego "Adivinalo". 
		Consiste en que el usuario ha de adivinar un número entre el 1 y el 100.
		Mostrará un mensaje:
			a. Para indicar si has acertado (en una nueva ventana)
			b. Para indicar si la solución es mayor o es menor

	@author Estela Muñoz Cordón
	@version 1.0	
*/

/* Número aleatorio 
 * variable global para que se cargue al principio de la página y 
 * se use a partir de ahí, como un valor constante 
 */
var aleat=0;

// Genera el número aleatorio al cargar la página (usaremos onload)
function generarAleat(){
	aleat= aleatorio();
}

function adivinaInfo(){	
	// Número introducido
	var num = document.getElementById("numero").value;	

	if (/^[0-9]+$/.test(num)) { // válido 
		num = parseInt(num);	

		if (num => 1 && num <= 100) { // entre 1 y 100
			document.getElementById("info").style.color="black";
			adivina(num, aleat);			
		}
		else{ // No entre 1 y 100
			document.getElementById("info").innerHTML = "Se requiere un número mayor o igual que 1 o menor o igual que 100.";
			document.getElementById("info").style.color="red";	
		}	
	}
	else{
		document.getElementById("info").innerHTML = "Se requiere un número mayor o igual que 1 o menor o igual que 100.";
		document.getElementById("info").style.color="red";	
	}	
}

// Calcula un número aleatorio del 1 al 100
function aleatorio(){
	var aleato = Math.random() * (100-1);
    aleato = Math.floor(aleato);
    return parseInt(1) + aleato;
}

// Comprueba si has adivinado el número
function esCorrecto(n, a){
	if (n == a) {
		return true;
	}
	else{
		return false;
	}
}

// Si se ha acertado, abre una ventana y muestra el mensaje de acierto
function adivina(n, a){	
	if (esCorrecto(n, a)) {	// Es correcto
		var ventanaNueva = window.open(); // Abrimos ventana nueva

		ventanaNueva.document.open(); // Abrimos documento para escribir
		
		ventanaNueva.document.write("Acertaste. ¡Bien hecho!"+
			"<br/><br/><form><input type=\"button\" id=\"reintentar\" "+
			"value=\"Reintentar\" /></form>");

		ventanaNueva.document.close(); // Cerramos documento

		// Recogemos el botón
		var boton = ventanaNueva.document.getElementById("reintentar"); 
		// Le añadimos un evento (realice una acción al hacer click)
		boton.addEventListener("click", function(){reset(ventanaNueva);}); 
	}
	else{ // No es correcto
		if (n > a) { // Es mayor
			document.getElementById("info").innerHTML = "El número introducido es mayor";	
		}
		else{ // Es menor
			document.getElementById("info").innerHTML = "El número introducido es menor";	
		}				
	}
}

// Cierra la ventana para volver a jugar
function reset(v){
	v.close(); // cerramos la ventana nueva
	// Reseteamos el número anterior
	document.getElementById("numero").value="";
	// Reseteamos el mensaje informativo
	document.getElementById("info").innerHTML = "";	
	// Volvemos a general el número aleatorio
	generarAleat();
} 