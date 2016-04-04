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
function esSexoSeleccionado(s){ 
	return s[0].checked || s[1].checked;
}

// Comprueba si se han aceptado las condiciones
function esAceptado(a){
	return a.checked;
}

// Comprueba si hay errores en el nombre
function validarNombre(n, e){
	if (esVacio(n.value.trim())) {
		e.innerHTML = "El nombre no puede estar vacío.";
	}
	else if (!esCorrecto(n.value.trim(), /^[A-z\sáéíóúñÁÉÍÓÚÑüÜ]{3,}$/)) {
		e.innerHTML = "Formato incorrecto. Se permiten nombres compuestos, con mayúsculas o minúsculas, tildes y diéresis.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en los apellidos
function validarApellidos(a, e){
	if (esVacio(a.value.trim())) {
		e.innerHTML = "Los apellidos no pueden estar vacíos.";
	}
	else if (!esCorrecto(a.value.trim(), /^[A-z\sáéíóúñÁÉÍÓÚÑüÜ]{3,}$/)) {
		e.innerHTML = "Formato incorrecto. Se permiten apellidos compuestos, con mayúsculas o minúsculas, tildes y diéresis.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en el DNI
function validarDni(d, e){
	if (esVacio(d.value.trim())) {
		e.innerHTML = "El DNI no puede estar vacío.";
	}
	else if (!esCorrecto(d.value.trim(), /^[0-9]{8}[ -]?(?![iouIOU])[A-z]$/)) {
		e.innerHTML = "Compruebe que el DNI tiene 8 dígitos y que la letra, mayúscula o minúscula, es la correcta (No se permiten: i, o, u). Puede llevar o no guión.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en el alias
function validarAlias(a, e){
	if (esVacio(a.value.trim())) {
		e.innerHTML = "El alias no puede estar vacío.";
	}
	else if (!esCorrecto(a.value.trim(), /^[0-9A-zÁÉÍÓÚáéíóúÑñ-]{5,15}$/)) {
		e.innerHTML = "Compruebe que el alias tiene un mínimo de 5 caracteres y un máximo de 15, admitiendo mayúsculas, minúsculas, números y caracteres especiales (tildes y ñ).";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en la contraseña
function validarContrasenia(c, e){
	if (esVacio(c.value.trim())) {
		e.innerHTML = "La contraseña no puede estar vacía.";
	}
	else if (!esCorrecto(c.value.trim(), /^(([A-z0-9]){6,}|([A-z_@#$?¿&!%-]){6,}|([A-Z0-9_@#$?¿&!%-]){6,}|([a-z0-9_@#$?¿&!%-]){6,})$/)) {
		e.innerHTML = "Compruebe que la contraseña tenga un mínimo de 6 caracteres y cumpla al menos tres de las siguientes condiciones: mayúsculas, minúsculas, dígitos, caracteres no alfanuméricos (!,$,%,...).";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en la fecha
function validarFecha(f, e){
	if (esVacio(f.value.trim())) {
		e.innerHTML = "La fecha no puede estar vacía.";
	}
	else if (!esFechaCorrecta(f.value.trim())) {
		e.innerHTML = "Compruebe que la fecha tenga alguno de estos formatos: dd-mm-aaaa, dd/mm/aaaa, dd mm aaaa. Debe ser una fecha válida: que el día coincida con el de ese mes y ese año concretos.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en el sexo
function validarSexo(s, e){
	if (!esSexoSeleccionado(s)) {
		e.innerHTML = "Debe seleccionar un sexo.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en el país
function validarPais(p, e){
	if (esVacio(p.value.trim())) {
		e.innerHTML = "Debe seleccionar un país.";
	}		
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en el correoe
function validarCorreo(c, e){
	if (esVacio(c.value.trim())) {
		e.innerHTML = "El correo no puede estar vacío.";
	}
	else if (!esCorrecto(c.value.trim(), /^[A-z]{5,}@[a-z]{5,}[.][a-z]{2,}$/)) {
		e.innerHTML = "Compruebe que el correo tenga un mínimo de 5 caracteres tanto antes como después de la @ y que tenga un formato del tipo: micorreo@correo.com, micorreo@correo.es, etc.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en la cuenta
function validarCuenta(c, e){
	if (esVacio(c.value.trim())) {
		e.innerHTML = "La cuenta no puede estar vacía.";
	}
	else if (!esCorrecto(c.value.trim(), /^[0-9]{4}[\s-][0-9]{4}[\s-][0-9]{2}[\s-][0-9]{9}$/)) { // Si fuera para IBAN /^ES[0-9]{22}$/
		e.innerHTML = "Compruebe que la cuenta es de formato: nnnn-nnnn-nn-nnnnnnnnn o nnnn nnnn nn nnnnnnnn (4 dígitos, 4 dígitos, 2 dígitos y 9 dígitos respectivamente).";
	}
	else{
		e.innerHTML = "";
	}
}	

// Comprueba si hay errores en el teléfono
function validarTelefono(t, e){
	if (esVacio(t.value.trim())) {
		e.innerHTML = "El teléfono no puede estar vacío.";
	}
	else if(!esCorrecto(t.value.trim(), /^[0-9]{3}[\s-][0-9]{2}[\s-][0-9]{2}[\s-][0-9]{2}$/)) {
		e.innerHTML = "El teléfono ha de ser del siguiente formtato: nnn-nn-nn-nn o nnn nn nn nn.";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en la url
function validarUrl(u, e){
	if (esVacio(u.value.trim())) {
		e.innerHTML = "La url no puede estar vacía.";
	}
	else if(!esCorrecto(u.value.trim(), /^www[.][A-z]{3,}[.][a-z]{2,}$/)) {
		e.innerHTML = "La url ha de ser del formato: www.algo.algo(con un mínimo de tres caracteres después de las tres w y un mínimo de dos caracteres al final).";
	}
	else{
		e.innerHTML = "";
	}
}

// Comprueba si hay errores en la aceptación de condiciones
function validarAceptar(a, e){
	if (!esAceptado(a)) {
		e.innerHTML = "Hay que aceptar las condiciones.";
	}
	else{
		e.innerHTML = "";
	}
}