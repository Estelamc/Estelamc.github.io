/*
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

// Informa si Java está habilitado o no
function infoJava(){
	var ventanaJava = window.open(); // ventana nueva
	
	ventanaJava.document.open(); // nuevo documento

	ventanaJava.document.write(
		"<html>"+
			"<head>"+
				"<meta charset=\"UTF-8\">"+				
			
				"<title>Detectar Java</title>"+				
			"</head>"+

			"<body>"
	);
	
	if (ventanaJava.navigator.javaEnabled()) { // tiene java (true)
		ventanaJava.document.write("<p>Java S&Iacute est&aacute; disponible en esta ventana.</p>");
	}
	else{ // no tiene java (false)
		ventanaJava.document.write("<p>Java NO est&aacute; disponible en esta ventana.</p>");
	}

	ventanaJava.document.write("</body></html>");

	ventanaJava.document.close();
}

// Abre otra ventana con la dirección y el tamaño indicados
function abrirOtraVentana(){
	window.open("http://www.iesgrancapitan.org/portal/", 800, 600);
}