/** 	
	Realizar una aplicación en JavaScript que realice lo siguiente:
		1.Abra una nueva ventana.
			-Hacer una función y dentro de esa función:
			-Escribir en la nueva ventana <h1>Ventana Nueva</h1>
			-URL Completa: XXXXX
			-Protocolo utilizado: XXXXX
			-Nombre en código del navegador: XXXXX
			-Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:
				-Java SI disponible en esta ventana, o bien.
				-Java NO disponible en esta ventana.
			-Que abra una ventana con el contenido de http://www.iesgrancapitan.org/portal/ de 800x600.
		
		2.Y ahora fuera del código de la función que siga haciendo lo siguiente:
			-Que escriba en la ventana principal <h1>Tarea del tema 3</h1>
			-Que solicite: introduzca su nombre y apellidos.
			-Que solicite: introduzca DIA de nacimiento.
			-Que solicite: introduzca MES de nacimiento.
			-Que solicite: introduzca AÑO de nacimiento.
			-Una vez solicitados esos datos imprimirá en la ventana principal:
				-Buenos dias XXXXX
				-Tu nombre tiene XX caracteres, incluidos espacios.
				-La primera letra E de tu nombre está en la posición: X
				-La última letra E de tu nombre está en la posición: X
				-Tu nombre menos las 3 primeras letras es: XXXXXXXX
				-Tu nombre todo en mayúsculas es: XXXXXXXX
				-Tu edad es: XX años.
				-Naciste un feliz XXXXXX del año XXXX. No te acuerdas, pero era (LUNES/MARTES/MIÉRCOLES...) y [NO|SI] bisiesto
				-El coseno de 90 es: XXXXXXXXXX
				-El número mayor de (65, 22, 69, 99, 12) es: XX
				-Ejemplo de número al azar entre 1 y 10: XXXXXXXXXX
		
		3.Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda.
		
		4.Criterios de puntuación. 
			-Cumplimiento de los requisitos anteriores
			-Usabilidad
			-Estética (sin librerías)
			-Presentación del código (comentarios, identación...)

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