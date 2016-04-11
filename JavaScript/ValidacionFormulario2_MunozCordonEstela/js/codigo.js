/**
 * @author Estela Muñoz
 */
 
(function(){
	//--- VARIABLES ---\\

	var patronNombreYApellido = /^[A-z\sáéíóúñÁÉÍÓÚÑüÜ]{3,}$/,
		patronDni = /^[0-9]{8}[ -]?(?![iouIOU])[A-z]$/,
		patronAlias = /^[0-9A-zÁÉÍÓÚáéíóúÑñ-]{5,15}$/,
		patronContrasenia = /^(([A-z0-9]){6,}|([A-z_@#$?¿&!%-]){6,}|([A-Z0-9_@#$?¿&!%-]){6,}|([a-z0-9_@#$?¿&!%-]){6,})$/,
		patronCorreo = /^[A-z]{5,}@[a-z]{5,}[.][a-z]{2,}$/,
		patronCuenta = /^[0-9]{4}[\s-][0-9]{4}[\s-][0-9]{2}[\s-][0-9]{9}$/,
		patronTelefono = /^[0-9]{3}[\s-][0-9]{2}[\s-][0-9]{2}[\s-][0-9]{2}$/,
		patronUrl = /^www[.][A-z]{3,}[.][a-z]{2,}$/,
		nombre = document.getElementById("nombre"),	
		apellidos = document.getElementById('apellidos'),
		dni = document.getElementById('dni'),	
		alias = document.getElementById('alias'),
		contrasenia = document.getElementById('pass'),
		fecha = document.getElementById('fecha'),
		sexos = document.getElementsByClassName("radioB"),
		pais = document.getElementById("pais"),
		correo = document.getElementById('correo'),
		cuenta = document.getElementById('cuenta'),
		telefono = document.getElementById("telefono"),
		url = document.getElementById('url'),
		aceptar = document.getElementById('aceptar'),
		errorNombre = document.getElementById("errorN"),
		errorApellidos = document.getElementById('errorA'),
		errorDni = document.getElementById('errorD'),
		errorAlias = document.getElementById("errorAl"),
		errorContrasenia = document.getElementById('errorC'),
		errorFecha = document.getElementById('errorF'),
		errorSexo = document.getElementById('errorS'),
		errorPais = document.getElementById("errorP"),
		errorCorreo = document.getElementById("errorCor"),
		errorCuenta = document.getElementById('errorCu'),
		errorTelefono = document.getElementById("errorT"),
		errorUrl = document.getElementById('errorU'),
		errorAceptar = document.getElementById('errorAc'),
		botonLimpiar = document.getElementById('limpiar'),
		botonEnviar = document.getElementById('enviar');


	//--- VALIDACIONES ---\\

	// Comprueba si el campo está vacío
	// No necesario, pero como quiero saber el tipo de error, lo dejo
	function esVacio(dato){ 
		return dato == "" || dato == " " || dato.length == 0;
	}	

	// Comprueba si el dato coincide con un patrón
	function esCorrecto(dato, patron){
		return patron.test(dato);
	}

	// Comprueba si la fecha es correcta
	function esFechaCorrecta(fecha){
		var fechaArray = fecha.split(/[\s-/]/),
			anio = parseInt(fechaArray[2]),
			mes = parseInt(fechaArray[1]-1),
			dia = parseInt(fechaArray[0]),
			fechaNacimiento = new Date(anio, mes, dia);
		return fechaNacimiento.getDate() === dia;
	}

	//Comprueba si se ha seleccionado el sexo
	function esSexoSeleccionado(){ 
		return sexos[0].checked || sexos[1].checked;
	}

	// Comprueba si se han aceptado las condiciones
	function esAceptado(){
		return aceptar.checked;
	}

	// Comprueba si hay errores en el nombre
	function validarNombre(){
		if (esVacio(nombre.value.trim())) {
			errorNombre.innerHTML = "El nombre no puede estar vacío.";
		}
		else if (!esCorrecto(nombre.value.trim(), patronNombreYApellido)) {
			errorNombre.innerHTML = "Formato incorrecto. Se permiten nombres compuestos, con mayúsculas o minúsculas, tildes y diéresis.";
		}
		else{
			errorNombre.innerHTML = "";
		}
	}

	// Comprueba si hay errores en los apellidos
	function validarApellidos(){
		if (esVacio(apellidos.value.trim())) {
			errorApellidos.innerHTML = "Los apellidos no pueden estar vacíos.";
		}
		else if (!esCorrecto(apellidos.value.trim(), patronNombreYApellido)) {
			errorApellidos.innerHTML = "Formato incorrecto. Se permiten apellidos compuestos, con mayúsculas o minúsculas, tildes y diéresis.";
		}
		else{
			errorApellidos.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el DNI
	function validarDni(){
		if (esVacio(dni.value.trim())) {
			errorDni.innerHTML = "El DNI no puede estar vacío.";
		}
		else if (!esCorrecto(dni.value.trim(), patronDni)) {
			errorDni.innerHTML = "Compruebe que el DNI tiene 8 dígitos y que la letra, mayúscula o minúscula, es la correcta (No se permiten: i, o, u). Puede llevar o no guión.";
		}
		else{
			errorDni.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el alias
	function validarAlias(){
		if (esVacio(alias.value.trim())) {
			errorAlias.innerHTML = "El alias no puede estar vacío.";
		}
		else if (!esCorrecto(alias.value.trim(), patronAlias)) {
			errorAlias.innerHTML = "Compruebe que el alias tiene un mínimo de 5 caracteres y un máximo de 15, admitiendo mayúsculas, minúsculas, números y caracteres especiales (tildes y ñ).";
		}
		else{
			errorAlias.innerHTML = "";
		}
	}
	
	// Comprueba si hay errores en la contraseña
	function validarContrasenia(){
		if (esVacio(contrasenia.value.trim())) {
			errorContrasenia.innerHTML = "La contraseña no puede estar vacía.";
		}
		else if (!esCorrecto(contrasenia.value.trim(), patronContrasenia)) {
			errorContrasenia.innerHTML = "Compruebe que la contraseña tenga un mínimo de 6 caracteres y cumpla al menos tres de las siguientes condiciones: mayúsculas, minúsculas, dígitos, caracteres no alfanuméricos (!,$,%,...).";
		}
		else{
			errorContrasenia.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la fecha
	function validarFecha(){
		if (esVacio(fecha.value.trim())) {
			errorFecha.innerHTML = "La fecha no puede estar vacía.";
		}
		else if (!esFechaCorrecta(fecha.value.trim())) {
			errorFecha.innerHTML = "Compruebe que la fecha tenga alguno de estos formatos: dd-mm-aaaa, dd/mm/aaaa, dd mm aaaa. Debe ser una fecha válida: que el día coincida con el de ese mes y ese año concretos.";
		}
		else{
			errorFecha.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el sexo
	function validarSexo(){
		if (!esSexoSeleccionado()) {
			errorSexo.innerHTML = "Debe seleccionar un sexo.";
		}
		else{
			errorSexo.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el país
	function validarPais(){
		if (esVacio(pais.value.trim())) {
			errorPais.innerHTML = "Debe seleccionar un país.";
		}		
		else{
			errorPais.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el correo
	function validarCorreo(){
		if (esVacio(correo.value.trim())) {
			errorCorreo.innerHTML = "El correo no puede estar vacío.";
		}
		else if (!esCorrecto(correo.value.trim(), patronCorreo)) {
			errorCorreo.innerHTML = "Compruebe que el correo tenga un mínimo de 5 caracteres tanto antes como después de la @ y que tenga un formato del tipo: micorreo@correo.com, micorreo@correo.es, etc.";
		}
		else{
			errorCorreo.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la cuenta
	function validarCuenta(){
		if (esVacio(cuenta.value.trim())) {
			errorCuenta.innerHTML = "La cuenta no puede estar vacía.";
		}
		else if (!esCorrecto(cuenta.value.trim(), patronCuenta)) { // Si fuera para IBAN /^ES[0-9]{22}$/
			errorCuenta.innerHTML = "Compruebe que la cuenta es de formato: nnnn-nnnn-nn-nnnnnnnnn o nnnn nnnn nn nnnnnnnn (4 dígitos, 4 dígitos, 2 dígitos y 9 dígitos respectivamente).";
		}
		else{
			errorCuenta.innerHTML = "";
		}
	}	

	// Comprueba si hay errores en el teléfono
	function validarTelefono(){
		if (esVacio(telefono.value.trim())) {
			errorTelefono.innerHTML = "El teléfono no puede estar vacío.";
		}
		else if(!esCorrecto(telefono.value.trim(), patronTelefono)) {
			errorTelefono.innerHTML = "El teléfono ha de ser del siguiente formtato: nnn-nn-nn-nn o nnn nn nn nn.";
		}
		else{
			errorTelefono.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la url
	function validarUrl(){
		if (esVacio(url.value.trim())) {
			errorUrl.innerHTML = "La url no puede estar vacía.";
		}
		else if(!esCorrecto(url.value.trim(), patronUrl)) {
			errorUrl.innerHTML = "La url ha de ser del formato: www.algo.algo(con un mínimo de tres caracteres después de las tres w y un mínimo de dos caracteres al final).";
		}
		else{
			errorUrl.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la aceptación de condiciones
	function validarAceptar(){
		if (!esAceptado()) {
			errorAceptar.innerHTML = "Hay que aceptar las condiciones.";
		}
		else{
			errorAceptar.innerHTML = "";
		}
	}

	// Limpia todos los campos y los mensajes de error
	function limpiar(){
		nombre.value = "";	
		apellidos.value = "";
		dni.value = "";	
		alias.value = "";
		contrasenia.value = "";
		fecha.value = "";
		sexos[0].checked = false;
		sexos[1].checked = false;
		pais.value = "";
		correo.value = "";
		cuenta.value = "";
		telefono.value = "";
		url.value = "";
		aceptar.checked = false;
		errorNombre.innerHTML = ""; 
		errorApellidos.innerHTML = ""; 
		errorDni.innerHTML = ""; 
		errorAlias.innerHTML = ""; 
		errorContrasenia.innerHTML = ""; 
		errorFecha.innerHTML = ""; 
		errorSexo.innerHTML = ""; 
		errorPais.innerHTML = ""; 
		errorCorreo.innerHTML = ""; 
		errorCuenta.innerHTML = ""; 
		errorTelefono.innerHTML = ""; 
		errorUrl.innerHTML = ""; 
		errorAceptar.innerHTML = ""; 
	}

	// Valida todos los campos
	function validarTodo(){
		validarNombre();
		validarApellidos();
		validarDni();
		validarAlias();
		validarContrasenia();
		validarFecha();
		validarSexo();
		validarSexo();
		validarPais();
		validarCorreo();
		validarCuenta();
		validarTelefono();
		validarUrl();
		validarAceptar();
	}

	//--- FORMULARIO ---\\

	nombre.addEventListener("blur", validarNombre);
	apellidos.addEventListener("blur", validarApellidos);
	dni.addEventListener("blur", validarDni);
	alias.addEventListener("blur", validarAlias);
	contrasenia.addEventListener("blur", validarContrasenia);
	fecha.addEventListener("blur", validarFecha);
	sexos[0].addEventListener("blur", validarSexo);
	sexos[1].addEventListener("blur", validarSexo);
	pais.addEventListener("blur", validarPais);
	correo.addEventListener("blur", validarCorreo);
	cuenta.addEventListener("blur", validarCuenta);
	telefono.addEventListener("blur", validarTelefono);
	url.addEventListener("blur", validarUrl);
	aceptar.addEventListener("blur", validarAceptar);

	botonLimpiar.addEventListener("click", limpiar);
	botonEnviar.addEventListener("click",  function(event){
		event.preventDefault();
		validarTodo();
	});
})();