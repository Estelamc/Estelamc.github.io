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
	
	/*var botonJava = ventanaNueva.document.getElementById("java");
	botonJava.addEventListener("click", function(){infoJava();});*/

	/*var botonOtraVentana = ventanaNueva.document.getElementById("otraVentana");
	botonOtraVentana.addEventListener("click", function(){abrirOtraVentana();});*/
}

// Modifica la ventan principal
function ventanaPrincipal(){ 
	document.getElementById("contenido").innerHTML = 
		"<h1>Tarea del Tema 3</h1>"+
		"<form>"+ 
			"Introduzca su nombre y apellidos: <input type=\"text\" id=\"nombre\" />"+
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

	// VALIDAR
	document.getElementById("info").innerHTML = 
		"<p>Buenos días "+nombreV+"."+
		"<br/>Tu nombre tiene "+nombreV.length+" caracteres, incluidos espacios."+
		"<br/>La primera letra E de tu nombre está en la posición: "+nombreV.toLowerCase().indexOf("e")+"."+
		"<br/>La última letra E de tu nombre está en la posición: "+nombreV.toLowerCase().lastIndexOf("e")+"."+
		"<br/>Tu nombre menos las 3 primeras letras es: "+quitarLetras(nombreV)+"."+
		"<br/>Tu nombre todo en mayúsculas es: "+nombreV.toUpperCase()+"."+
		"<br/>Tu edad es: "+edad(annoV)+"."+
		"<br/>Naciste un feliz "+diaV+" del "+mesV+" del año "+annoV+"."+
		". No te acuerdas, pero era (lunes..)"+" y "+" bisiesto."+ // FALTAAAAAAAAAAAAAAAAAAAAAAA
		"<br/>El coseno de 90 es: "+Math.cos(90)+"."+
		"<br/>El número mayor de (65, 22, 69, 99, 12) es: "+mayor()+"."+
		"<br/>Ejemplo de número al azar entre 1 y 10: "+aleatorio()+".";
}

// Calcula un número aleatorio del 1 al 10
function aleatorio(){
	var aleato = Math.random() * (10-1);
    aleato = Math.floor(aleato);
    return parseInt(1) + aleato;
}

// Devuelve el mayor de los números indicados
function mayor(){
	return Math.max(65, 22, 69, 99, 12);
}

// Devuelve la edad
function edad(a){
	var date = new Date();
	var annoActual = date.getFullYear();
	return annoActual-a;
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
	if (/^[A-Z][a-z]{2}\\s[A-Z][a-z]{2}+\\s[A-Z][a-z]{2}+$/.test(n)) { // valido
		return true;
	}
	else{
		return false;
	}
}

// Comprueba si el día es válido
function fechaEsValido(d, m, a){
	var fecha = d.concat("-"+m.concat("-"+a)); // Uno la fecha entera
	if (/^(\d{1,2})-(\d{1,2})-(\d{4})$/.test(fecha)) { // válida
		return true;
	}
	else{ // inválida
		return false;
	}
}

/*
	si mes == 1, 3, 5, 7, 8, 10, 12, -> 31 días
	si mes == 4, 6, 9, 11 --> 30 días
	si mes 2 --> bisiesto 29 --- sino 28 dias
*/

/*
	var campos = document.getElementsByName("numero"); // todos los elementos con el nombre "numero"
	for (var i = campos.length - 1; i >= 0; i--) { // recorre el array
		if (/^[0-9]+$/.test(campos[i].value)){ // válido
			if(parseInt(campos[i].value) % 5 == 0){ // divisible por 5
				document.getElementById("info"+i).innerHTML=" Es múltiplo de 5";
				document.getElementById("info"+i).style.color="blue";
			}		
			if(parseInt(campos[i].value) % 5 != 0){ // no divisible por 5
				document.getElementById("info"+i).innerHTML=" No es múltiplo de 5";
				document.getElementById("info"+i).style.color="red";
			}		
		}
		else{	//inválido		
			document.getElementById("info"+i).innerHTML=" Formato incorrecto";
			document.getElementById("info"+i).style.color="red";
		}	
	}
*/

/*
	ordenar:
	var arr = [65, 22, 69, 99, 12];	
	return arr.sort(function(a,b){return a-b}); 
	/* La función anónima dentro del sort() 
	 * evita que se ordenen de forma alfabética, 
	 * aunque en este caso no es necesaria realmente 
	 * (basta con el sort() a secas).
	 *
	 * Ejemplo sin función anónima: (3, 4, 1, 32) --> (1, 3, 32, 4)
	 * Ejemplo con función anónima: (3, 4, 1, 32) --> (1, 3, 4, 32)
	 * He preferido usarla para practicar con ella. 
	 */
