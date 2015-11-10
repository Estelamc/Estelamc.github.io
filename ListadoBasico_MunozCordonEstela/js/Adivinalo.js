/** 	
	1.Implementa el juego "Adivinalo". 
		Consiste en que el usuario ha de adivinar un número entre el 1 y el 100.
		Mostrará un mensaje:
			a. Para indicar si has acertado (en una nueva ventana)
			b. Para indicar si la solución es mayor o es menor

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function adivinaInfo(){	
	// Número introducido
	var num = document.getElementById("numero").value;	
	num = parseInt(num);
	// Número aleatorio
	var aleatorio = aleatorio();	

	adivina(num, aleatorio);	
}

// Calcula un número aleatorio del 1 al 100
function aleatorio(){
	var aleat = Math.random() * (100-1);
    aleat = Math.floor(aleat);
    return parseInt(1) + aleat;
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

function adivina(n, a){
	window.open();
	if (esCorrecto(n, a)) {		
		window.write(document.write("Acertaste. ¡Bien hecho!"));
	}
	else{
		if (n > a) {
			window.write(document.write("El número introducido es mayor"));	
		}
		else{
			window.write(document.write("El número introducido es menor"));	
		}		
	}
	window.close();
}

// Comprueba si deseas continuar
function continuar(o){
	if (o == "si") {

	}
}



 