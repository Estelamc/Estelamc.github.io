/*	
 * by Estela Muñoz Cordón
 *
 * Añadida funcionalidad 
 * para borrar el listado
 * y el mensaje de información
 *
 */

(function(){
	
	//--------- VARIABLES ---------\\

	var informacion = document.getElementById("info"),
		nombre = document.getElementById("nombre"), 
		apellidos = document.getElementById("apellidos"), 
		dni = document.getElementById("dni"), 
		sexo = document.getElementById("sexo"), 
		aceptacion = document.getElementById("aceptar"),
		errorNombre = document.getElementById("errorN"),
		errorApellidos = document.getElementById("errorA"),
		errorDni = document.getElementById("errorD"),
		errorSexo = document.getElementById("errorS"),
		errorAceptacion = document.getElementById("errorAc"),
		botonCrear = document.getElementById("nuevo"),
		botonLimpiar = document.getElementById("limpiar"),
		// Variables para el DOM
		ul = document.createElement("ul"),
		contador = 0, // elemento de la lista (contador de elementos li) 
		// Todos los elementos de la lista, para borrarlos luego
		lista = document.getElementsByTagName("li"); 
	
	// Agregamos el <ul> para la lista al DOM
	document.documentElement.lastChild.appendChild(ul);	


	//--------- FORMULARIO ---------\\

	// Crea el usuario
	function crearUsuario(){
		validarAceptado();
		validarApellidos();
		validarNombre();
		validarSexo();
		validarDni();

		if (errorApellidos.innerHTML == "" && errorNombre.innerHTML == "" && errorDni.innerHTML == "" 
			&& errorSexo.innerHTML == "" && errorAceptacion.innerHTML == ""){
			var usuarioNuevo = new Usuario(nombre.value.trim(), apellidos.value.trim(), dni.value.trim(), sexo.value.trim());
			usuarioNuevo.mostrar();
			usuarioNuevo.listItem();
		}		
	}

	// Borra los datos
	function limpiar(){
		limpiarControles();
		limpiarErrores();
		limpiarDiv();	
		borrarLista();
		contador = 0; // reinicia el contador			
	}

	// Borra los valores de los campos
	function limpiarControles(){
		nombre.value = "";
		apellidos.value = "";
		dni.value = "";
		sexo.value = "";
		deseleccionarCasilla();	
	}

	// Borra los mensajes de error
	function limpiarErrores(){
		errorNombre.innerHTML = "";
		errorApellidos.innerHTML = "";
		errorDni.innerHTML = "";
		errorSexo.innerHTML = "";
		errorAceptacion.innerHTML = "";
	}

	// Borra el mensaje de información
	function limpiarDiv(){
		informacion.innerHTML = "";
	}

	// Deselecciona el checkbox
	function deseleccionarCasilla(){
		if (esAceptado()) { // es seleccionado
			aceptacion.checked=false;
		}
	}

	// Borra los elementos <li> (la lista)
	function borrarLista(){		
		// Va borrando todos los hijos de <ul>
		for(var j= ul.childNodes.length; j>0; j--){
			ul.removeChild(ul.lastChild);
		}
		// Reiniciamos el contador de elementos de la lista
		e = 0;
	}


	// -------- VALIDACIONES -------- \\

	// Comprobar si se han aceptado las condiciones
	function esAceptado(){
		return aceptacion.checked;
	}

	// Comprueba si el campo está vacío
	function esVacio(campo){
		return (campo == "" || campo == " " || campo.length == 0);
	}

	// Comprueba si el campo es correcto
	function esCampoCorrecto(patron, campo){
		return patron.test(campo);
	}

	// Comprueba si el sexo es correcto
	function esSexoCorrecto(){		
		return (sexo.value == "hombre" || sexo.value == "mujer");
	}

	// Comprueba si hay errores en el nombre
	function validarNombre(){ // 
		if (esVacio(nombre.value.trim())){
			errorNombre.innerHTML = "El nombre no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^([A-Z]|[a-z]|[0-9]|-|_){4,}$/, nombre.value.trim())){
			errorNombre.innerHTML = "El nombre requiere 4 caracteres como mínimo y pueder estar compuesto de letras(mayúsculas y minúsculas), números, guiones y subrayados";
		}
		else{
			errorNombre.innerHTML = "";
		}
	}

	// Comprueba si hay errores en los apellidos
	function validarApellidos(){
		if (esVacio(apellidos.value.trim())){
			errorApellidos.innerHTML = "Los apellidos no pueden estar vacíos";
		}
		else{
			errorApellidos.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el DNI
	function validarDni(){
		if (esVacio(dni.value.trim())){
			errorDni.innerHTML = "El DNI no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^[0-9]{8}[A-Za-z]$/, dni.value.trim())){
			errorDni.innerHTML = "El DNI debe estar formado por 8 números y una letra";
		}
		else{
			errorDni.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el sexo
	function validarSexo(){
		if (!esSexoCorrecto()){
			errorSexo.innerHTML = "Selecciona si eres hombre o mujer";
		}
		else{
			errorSexo.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la aceptación
	function validarAceptado(){
		if (!esAceptado()) {
			errorAceptacion.innerHTML = "Debes aceptar las condiciones";
		}
		else{
			errorAceptacion.innerHTML = "";
		}
	}

	// Validar cada campo al perder el foco
	nombre.addEventListener("blur", validarNombre);
	apellidos.addEventListener("blur", validarApellidos);
	dni.addEventListener("blur", validarDni);
	sexo.addEventListener("blur", validarSexo);
	aceptacion.addEventListener("blur", validarAceptado);

	// Agregar funcionalidad a los botones
	botonCrear.addEventListener("click", crearUsuario);
	botonLimpiar.addEventListener("click", limpiar);


	//--------- USUARIO ---------\\	
	
	// Constructor de Usuario
	function Usuario(nombre, apellidos, dni, sexo){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
		this.sexo = sexo;
	}

	// Muestra el usuario
	Usuario.prototype.mostrar = function(){
		informacion.innerHTML = '<br>Nombre: '+this.nombre+
		'<br>Apellidos: '+this.apellidos+
		'<br>DNI: '+this.dni+
		'<br>Sexo: '+this.sexo+'<br><br>'; 
	}

	// Agrega un elemento a la lista del DOM
	Usuario.prototype.listItem = function(){
		contador++;
		// Nodo de texto para el elemento de la lista
		var texto = document.createTextNode('- Elemento de la lista '+
				contador+': '+this.nombre+' '+
				this.apellidos+' '+this.dni+' '+this.sexo);	
		// Añade un elemento a la lista	
		ul.appendChild(document.createElement("li").appendChild(texto));
		// Añade un salto de línea
		ul.appendChild(document.createElement("br"));
	}
})();