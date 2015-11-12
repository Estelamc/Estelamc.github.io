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

// Abre una nueva ventana
function abrirVentana(){
	var ventanaNueva = window.open(); // Abrimos ventana nueva

	ventanaNueva.document.open(); // Abrimos documento para escribir
	
	ventanaNueva.document.write("<html>"+
			"<head>"+
				"<meta charset=\"UTF-8\">"+				
			
				"<title>Ventana Nueva</title>"+
			
				"<!--Llamamos a nuestro código JavaScript externo-->"+
				"<script type=\"text/javascript\" src=\"js/FuncionVentanaNueva.js\"></script>"+
				
				"<!--En el caso de que el navegador tenga desactivado"+ 
				"JavaScript, avisamos de este hecho y decimos como"+ 
				"solucionarlo, aportando un enlace-->"+
				"<noscript>JavaScript se encuentra desactivado, actívelo siguiendo los siguientes pasos:"+ 
				"<a href=\"http://enable-javascript.com/es/\">Activar/Desactivar JavaScript</a></noscript>"+
			"</head>"+

			"<body>"+
				"<h1>Ventana Nueva</h1>"+
				"<p>URL Completa: "+ventanaNueva.location.href+
					"<br/>Protocolo utilizado: "+ventanaNueva.location.protocol+
					"<br/>Nombre en código del navegador: "+ventanaNueva.navigator.appCodeName+
				"</p>"+
				"<form><input type=\"button\" id=\"java\" "+
					"value=\"Detectar Java\" onclick=\"infoJava();\"/></form>"+

				"<form><input type=\"button\" id=\"otraVentana\" "+
					"value=\"Abre otra ventana\" onclick=\"abrirOtraVentana();\"/></form>"+
			"</body>"+
		"</html>");	

	ventanaNueva.document.close(); // Cerramos documento
}

// Modifica la ventan principal
function ventanaPrincipal(){ 
	document.getElementById("contenido").innerHTML = 
		"<h1>Tarea del Tema 3</h1>"+
		"<form>"+ 
			"<input type=\"button\" name=\"abrir\" value=\"Abrir Ventana\" onclick=\"abrirVentana();\" />"+
			"<br/><br/>Introduzca su nombre y apellidos: <input type=\"text\" id=\"nombre\" />"+
			"<span id=\"infoN\"></span><br /><br />"+						
			"Introduzca DÍA de nacimiento: <input type=\"text\" id=\"dia\" />"+
			"<span id=\"infoD\"></span><br /><br />"+
			"Introduzca MES de nacimiento: <input type=\"text\" id=\"mes\" />"+
			"<span id=\"infoM\"></span><br /><br />"+
			"Introduzca AÑO de nacimiento: <input type=\"text\" id=\"anno\" />"+
			"<span id=\"infoA\"></span><br /><br />"+
			"<input type=\"button\" name=\"comprobar\" value=\"Comprobar\" onclick=\"info();\" />"+
		"</form>";
}

// Muestra información tras recoger los datos 
// del formulario y darle a comprobar
function info(){
	// Recogemos los valores de los campos
	var nombreV = document.getElementById("nombre").value;
	var diaV = document.getElementById("dia").value;
	var mesV = document.getElementById("mes").value;
	var annoV = document.getElementById("anno").value;
	// Recogemos el año actual
	var date = new Date();
	var annoActual = date.getFullYear();

	if (nombreEsValido(nombreV) && diaEsValido(diaV) 
		&& mesEsValido(mesV) && annoEsValido(annoV, annoActual)) { // datos válidos
		// Quitamos los mensajes de error
		document.getElementById("infoN").innerHTML=" ";
		document.getElementById("infoD").innerHTML=" ";
		document.getElementById("infoM").innerHTML=" ";
		document.getElementById("infoA").innerHTML=" ";

		document.getElementById("info").innerHTML = 
		"<p>Buenos días "+nombreV+"."+
		"<br/>Tu nombre tiene "+nombreV.length+" caracteres, incluidos espacios."+
		"<br/>La primera letra E de tu nombre está en la posición: "+nombreV.toLowerCase().indexOf("e")+"."+
		"<br/>La última letra E de tu nombre está en la posición: "+nombreV.toLowerCase().lastIndexOf("e")+"."+
		"<br/>Tu nombre menos las 3 primeras letras es: "+quitarLetras(nombreV)+"."+
		"<br/>Tu nombre todo en mayúsculas es: "+nombreV.toUpperCase()+"."+
		"<br/>Tu edad es: "+edad(annoV, annoActual)+"."+
		"<br/>Naciste un feliz "+diaV+" del "+mesV+" del año "+annoV+
		". No te acuerdas, pero era "+diaSemana(diaV, mesV, annoV)+" y "+bisiestoInfo(annoV)+" bisiesto."+ // FALTAAAAAAAAAAAAAAAAAAAAAAA
		"<br/>El coseno de 90 es: "+Math.cos(90)+"."+
		"<br/>El número mayor de (65, 22, 69, 99, 12) es: "+mayor()+"."+
		"<br/>Ejemplo de número al azar entre 1 y 10: "+aleatorio()+".";
	}
	else{ // datos inválidos
		if (!nombreEsValido(nombreV)) {
			document.getElementById("infoN").innerHTML=" Formato incorrecto ";
			document.getElementById("infoN").style.color="red";
		}
		else{
			document.getElementById("infoN").innerHTML=" ";
		}

		if (!diaEsValido(diaV)) {
			document.getElementById("infoD").innerHTML=" Formato incorrecto ";
			document.getElementById("infoD").style.color="red";
		}
		else{
			document.getElementById("infoD").innerHTML=" ";
		}

		if (!mesEsValido(mesV)) {
			document.getElementById("infoM").innerHTML=" Formato incorrecto ";
			document.getElementById("infoM").style.color="red";
		}
		else{
			document.getElementById("infoM").innerHTML=" ";
		}

		if (!annoEsValido(annoV, annoActual)) {
			document.getElementById("infoA").innerHTML=" Formato incorrecto ";
			document.getElementById("infoA").style.color="red";
		}
		else{
			document.getElementById("infoA").innerHTML=" ";
		}
	}	
}

// Calcula un número aleatorio del 1 al 10
function aleatorio(){
	var aleat = Math.random() * (10-1);
    aleat = Math.floor(aleat);
    return parseInt(1) + aleat;
}

// Devuelve el mayor de los números indicados
function mayor(){
	return Math.max(65, 22, 69, 99, 12);
}

// Devuelve la edad
function edad(a, a2){
	return a2-a;
}

// Devuelve el nombre sin las tres primeras letras
function quitarLetras(n){
	// Lo convierto en array, con cada carácter en una posición
	n = n.split(""); 
	// Borra la primera posición 3 veces (3 primeras letras)
	n.shift();
	n.shift();
	n.shift();
	// Lo paso a cadena, separando por el carácter vacío (espacio)
	n = n.join("")	
	return n;
}

// Comprueba si el nombre y los apellidos son válidos
function nombreEsValido(n){
	if (/^[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+\s[A-ZÑÁÉÍÓÚ][a-zñáéíóú]+$/.test(n)) { // valido
		return true;
	}
	else{
		return false;
	}
}

// Devuelve el día de la semana
function diaSemana(d, m, a){
	var fecha = new Date(); 
	// Modifico los valores predeterminados 
	// de la fecha con los dados por el usuario
	fecha.setDate(d);
	fecha.setMonth(m);
	fecha.setYear(a);
	// Días de la semana (empieza en domingo 
	// porque en Date() corresponde al 0)
	var dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

	return dias[fecha.getDay()]; 
}

// Para el mensaje informativo de si 
// es bisiesto el año o no
function bisiestoInfo(a){
	if(esBisiesto(a)){
		return " es ";
	}
	else{
		return " no es ";
	}
}

// Comprueba si un año es bisiesto
function esBisiesto(a){
	if (a % 4 == 0 && a % 100 != 0 && a % 400) {
		return true;
	}
	else{
		return false;
	}
}

// Comprueba si el día es válido
function diaEsValido(d){
	//d = parseInt(d);
	if (d > 0 &&  d < 32) { // valido
		return true;
	}
	else{
		return false;
	}	
}

// Comprueba si el mes es válido
function mesEsValido(m){
	//m = parseInt(m);
	if (m > 0 &&  m < 13) { // valido
		return true;
	}
	else{
		return false;
	}	
}

// Comprueba si el año es válido
function annoEsValido(a, a2){
	//a = parseInt(a);
	if (a > 0 &&  a < a2) { // valido
		return true;
	}
	else{
		return false;
	}	
}

/*
	si mes == 1, 3, 5, 7, 8, 10, 12, -> 31 días
	si mes == 4, 6, 9, 11 --> 30 días
	si mes 2 --> bisiesto 29 --- sino 28 dias
*/