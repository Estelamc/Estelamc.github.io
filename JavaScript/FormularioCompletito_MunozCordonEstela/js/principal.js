/**
	Crea un formulario con todos los tipos de controles y realiza todas
	las validaciones posibles mediante JavaScript.
	
	Utiliza el modelo de registro avanzado de eventos según W3C
	(addEventListener), así como las expresiones regulares.
	
	Asegúrate de validar lo siguiente:

	- Obligatoriedad (campo de texto, opción seleccionada
	- (checkbox, radio button y selección)
	- Tipo de dato introducido (numérico...)
	- Dirección de correo válida
	- Número de DNI válido
	- Fecha válida
	- Número de teléfono
	- Número de cuenta corriente
	- URL
	
	Asegúrate de que:
	 1. Al perder el foco de cada control se comprueba su validación.
	 2. Los errores los muestras mediante css.
	 3. Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
	
	Procura aislar las validaciones del interfaz del usuario (arquitectura
	de tres capas)

	@author Estela Muñoz Cordón
	@version 0.1
*/

function general(){

	var nombre = document.getElementById("nombre");
	var errorNombre = document.getElementById("errorN");

	var dni = document.getElementById("dni");
	var errorDni = document.getElementById("errorDNI");

	var fecha = document.getElementById("fecha");
	var errorFecha = document.getElementById("errorF");

	var email = document.getElementById("email");
	var errorEmail = document.getElementById("errorE");

	var telefono = document.getElementById("telefono");
	var errorTelefono = document.getElementById("errorT");

	var cuenta = document.getElementById("cuenta");
	var errorCuenta = document.getElementById("errorC");

	var url = document.getElementById("url");
	var errorUrl = document.getElementById("errorU");

	var sexo = document.getElementsByName("rB");
	var errorSexo = document.getElementById("errorS");

	var idiomas = document.getElementsByName("cB");
	var errorIdiomas = document.getElementById("errorI");

	var provincia = document.getElementById("provincia");
	var errorProvincia = document.getElementById("errorP");

	var botonEnviar = document.getElementById("enviar");
	var botonReset = document.getElementById("reset");


	// Comprueba si el campo está vacío
	function esVacio(elemento){
		if (elemento == null || elemento.lenght == 0 || elemento == " ") {
			return true;
		}
		return false;
	}

	// Comprueba si la fecha es correcta
	function esFechaCorrecta(){
		var fechaRecogida = fecha.value;
		var fechaSeparada = fechaRecogida.split("/");
		var anio = parseInt(fechaSeparada[2]);
		var mes = parseInt(fechaSeparada[1])-1;
		var dia = parseInt(fechaSeparada[0]);
		var fechaDate = new Date(anio, mes, dia);

		if (esVacio(fechaRecogida)) { // si vacío
			errorFecha.innerHTML = "Campo requerido";
			fecha.focus();
			return false;
		}
		else { // si no vacío
			// si formato correcto
			if (/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(fechaRecogida)) { 
				if (fechaDate.getDate() == dia) { 
					errorFecha.innerHTML = "";
					return true; // si coincide con el día que debería ser
				}		
				//return false; // no coincide
			}
			errorFecha.innerHTML = "Formato incorrecto";
			fecha.focus();
			return false; // formato incorrecto	
		}		
	}

	// Comprueba el nombre
	function esNombreCorrecto(){
		if (esVacio(nombre.value)) { // si vacío
			errorNombre.innerHTML = "Campo requerido";
			nombre.focus();
			return false;
		}
		else{ // si no vacío
			// si formato correcto
			if (/^[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}\s[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}\s[A-Z-ÁÉÍÓÚÑ][a-záéíóúñ]{2,}$/.test(nombre.value)) { 				
			// MEJORAR PARA nombres compuestos y apellidos con "de/del"	
				errorNombre.innerHTML = "";
				return true; 
			}
			errorNombre.innerHTML = "Formato incorrecto";
			nombre.focus();
			return false; // formato incorrecto	
		}
	}

	// Comprueba el DNI
	function esDniCorrecto(){
		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		var dniRecogido = dni.value;
		var dniSeparado = dniRecogido.split("-");
		var letra = dniSeparado[1];
		var numero = parseInt(dniSeparado[0]);
		
		if (esVacio(dniRecogido)) { // si vacío
			errorDni.innerHTML = "Campo requerido";
			dni.focus();
			return false;
		}
		else{ // si no vacío
			if (/^[0-9]{8}-[A-Z]$/.test(dniRecogido)) {
				// Letra válida:posición coincide con el número dividido 
				// entre 23; y número es válido
				if ((letra == letras[numero % 23]) && (numero > 0) && (numero < 99999999)) { 
					errorDni.innerHTML = "";
					return true;
				}					
			}
			errorDni.innerHTML = "Formato incorrecto";
			dni.focus();
			return false;					
		}		
	}

	// Comprueba el email
	function esEmailCorrecto(){
		if (esVacio(email.value)) {
			errorEmail.innerHTML = "Campo requerido";
			email.focus();
			return false;
		}
		else{
			if (/^[A-z]*[a-z]{2,}[A-Z]*@[a-z]{2,}.(com|es)$/.test(email.value)) {
				errorEmail.innerHTML = "";
				return true;
			}
			errorEmail.innerHTML = "Formato incorrecto";
			email.focus();
			return false;
		}
	}

	// Comprueba el teléfono
	function esTelefonoCorrecto(){
		if (esVacio(telefono.value)) {
			errorTelefono.innerHTML = "Campo requerido";
			telefono.focus();
			return false;
		}
		else{
			if (/^[0-9]{3}\s[0-9]{2}\s[0-9]{2}\s[0-9]{2}$/.test(telefono.value)) {
				errorTelefono.innerHTML = "";
				return true;
			}
			errorTelefono.innerHTML = "Formato incorrecto";
			telefono.focus();
			return false;
		}
	}

	// Comprueba la cuenta
	function esCuentaCorrecta(){
		if (esVacio(cuenta.value)) {
			errorCuenta.innerHTML = "Campo requerido";
			cuenta.focus();
			return false;
		}
		else{
			if (/^[0-9]{4}-[0-9]{4}-[0-9]{2}-[0-9]{10}$/.test(cuenta.value)) {
				errorCuenta.innerHTML = "";
				return true;
			}
			errorCuenta.innerHTML = "Formato incorrecto";
			cuenta.focus();
			return false;
		}
	}

	// Compprueba la URL
	function esUrlCorrecta(){
		if (esVacio(url.value)) {
			errorUrl.innerHTML = "Campo requerido";
			url.focus();
			return false;
		}
		else{
			if (/^w{3}.[a-z]{2,}.(com|es|org|net)$/.test(url.value)) {
				errorUrl.innerHTML = "";
				return true;
			}
			errorUrl.innerHTML = "Formato incorrecto";
			url.focus();
			return false;
		}
	}

	// Comprueba la provincia
	function comprobarProvincia(){
		if (provincia.selectedIndex == 0 
			|| provincia.selectedIndex == null) {
			errorProvincia.innerHTML = "Campo requerido";
			provincia.focus();
			return false;
		}
		else{
			errorProvincia.innerHTML = "";
			return true;
		}		
	}

	// Comprueba los idiosmas
	function comprobarIdiomas(){
		for (var i = 0; i < idiomas.lenght; i++) {
			if (idiomas[i].checked) {
				errorIdiomas.innerHTML = "";
				return true;
			}
		}		
		errorIdiomas.innerHTML = "Campo requerido";
		idiomas[0].focus();
		return false;
	}

	// Comprueba el sexo
	function comprobarSexo(){
		for (var i = 0; i < sexo.lenght; i++) {
			if (sexo[i].checked) {
				errorSexo.innerHTML = "";
				return true;
			}
		}
		errorSexo.innerHTML = "Campo requerido";
		sexo[0].focus();
		return false;		
	}	

	// Limpia los campos
	function resetear(){
		nombre.value = "";
		dni.value = "";
		fecha.value = "";
		email.value = "";
		telefono.value = "";
		cuenta.value = "";
		url.value = "";
		//sexo.value = "";
		//idiomas.value = "";
		provincia.value = "ninguna";
		
		errorNombre.innerHTML = "";
		errorDni.innerHTML = "";
		errorFecha.innerHTML = "";
		errorEmail.innerHTML = "";
		errorTelefono.innerHTML = "";
		errorCuenta.innerHTML = "";
		errorUrl.innerHTML = "";
		errorSexo.innerHTML = "";
		errorIdiomas.innerHTML = "";
		errorProvincia.innerHTML = "";
	}	

	//----- EVENTOS -----\\

	fecha.addEventListener("blur", esFechaCorrecta);
	nombre.addEventListener("blur", esNombreCorrecto);
	dni.addEventListener("blur", esDniCorrecto);
	email.addEventListener("blur", esEmailCorrecto);
	telefono.addEventListener("blur", esTelefonoCorrecto);
	cuenta.addEventListener("blur", esCuentaCorrecta);
	url.addEventListener("blur", esUrlCorrecta);
	provincia.addEventListener("blur", comprobarProvincia);
	idiomas[1].addEventListener("blur", comprobarIdiomas);
	sexo[1].addEventListener("blur", comprobarSexo);

	botonEnviar.addEventListener("click", function(){
		esFechaCorrecta,							
		esNombreCorrecto,
		esDniCorrecto,
		esEmailCorrecto,
		esTelefonoCorrecto,
		esCuentaCorrecta,
		esUrlCorrecta,
		comprobarProvincia,
		comprobarIdiomas,
		comprobarSexo
	});

	botonReset.addEventListener("click", resetear);
}

window.addEventListener("load", general);