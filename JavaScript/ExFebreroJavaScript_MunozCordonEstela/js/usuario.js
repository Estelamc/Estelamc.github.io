/*
	Estela Muñoz Cordón
*/

(function(){
	//--------- USUARIO ---------\\	
	
	// Variable (para la información del usuario)
	var i = document.getElementById("info");

	// Variables para el DOM
	var html = document.documentElement,
		body = html.lastChild,
		ul = document.createElement("ul"),
		e = 0, // elemento de la lista (contador de elementos li) 
		lista = document.getElementsByTagName("li"); 
	// Agregamos la lista al DOM
	body.appendChild(ul);

	// Constructor de Usuario
	function Usuario(nombre, apellidos, dni, sexo){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
		this.sexo = sexo;
	}

	// Muestra el usuario
	Usuario.prototype.mostrar = function(){
		i.innerHTML = '<br>Nombre: '+this.nombre+
		'<br>Apellidos: '+this.apellidos+
		'<br>DNI: '+this.dni+
		'<br>Sexo: '+this.sexo+'<br><br>'; 
	}

	// Agrega un elemento a la lista del DOM
	Usuario.prototype.listItem = function(){
		e++;
		var li = document.createElement("li");
		var text = document.createTextNode('- Elemento de la lista '+e+
			': '+this.nombre+' '+
			this.apellidos+' '+this.dni+' '+this.sexo);
		ul.appendChild(li.appendChild(text));
		var br = document.createElement("br");
		ul.appendChild(br);
	}


	//--------- FORMULARIO ---------\\

	// Variables
	var n, 
		a, 
		d, 
		s, 
		ac = document.getElementById("aceptar"),
		eN = document.getElementById("errorN"),
		eA = document.getElementById("errorA"),
		eD = document.getElementById("errorD"),
		eS = document.getElementById("errorS"),
		eAc = document.getElementById("errorAc"),
		bU = document.getElementById("nuevo"),
		bL = document.getElementById("limpiar");

	// Crea el usuario
	function crearUsuario(){
		n = document.getElementById("nombre").value;
		a = document.getElementById("apellidos").value;
		d = document.getElementById("dni").value;
		s = document.getElementById("sexo").value;

		validarAceptado();
		validarApellidos();
		validarNombre();
		validarSexo();
		validarDni();

		if (!esVacio(n) && !esVacio(d) && !esVacio(a) && esAceptado() 
			&& esSexoCorrecto() && esCampoCorrecto(/^([A-Z]|[a-z]|[0-9]|-|_){4,}$/, n) 
			&& esCampoCorrecto(/^[0-9]{8}[A-Z]$/, d)) {
			var usuarioNuevo = new Usuario(n, a, d, s);
			usuarioNuevo.mostrar();
			usuarioNuevo.listItem();
		}		
	}

	// Borra los datos
	function limpiarCampos(){
		n = document.getElementById("nombre").value = "";
		a = document.getElementById("apellidos").value = "";
		d = document.getElementById("dni").value = "";
		s = document.getElementById("sexo").value = "";
		eN.innerHTML = "";
		eA.innerHTML = "";
		eD.innerHTML = "";
		eS.innerHTML = "";
		eAc.innerHTML = "";
		i.innerHTML = "";

		borrarLista();
		
		deseleccionarCasilla();		
	}

	// Deselecciona el checkbox
	function deseleccionarCasilla(){
		if (esAceptado()) { // es seleccionado
			ac.checked=false;
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
		if (ac.checked) { // seleccionado
			return true; 
		}
		return false;
	}

	// Comprueba si el campo está vacío
	function esVacio(campo){
		if (campo == "" || campo == " " || campo.length == 0) {
			return true;
		}
		return false;
	}

	// Comprueba si el campo es correcto
	function esCampoCorrecto(patron, campo){
		if (patron.test(campo)) {
			return true;
		}
		return false;
	}

	// Comprueba si el sexo es correcto
	function esSexoCorrecto(){
		if (s == "hombre" || s == "mujer") {
			return true;
		}
		return false;
	}

	// Comprueba si hay errores en el nombre
	function validarNombre(){ // 
		if (esVacio(n)){
			eN.innerHTML = "El nombre no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^([A-Z]|[a-z]|[0-9]|-|_){4,}$/, n)){
			eN.innerHTML = "El nombre requiere 4 caracteres como mínimo y pueder estar compuesto de letras(mayúsculas y minúsculas), números, guiones y subrayados";
		}
		else{
			eN.innerHTML = "";
		}
	}

	// Comprueba si hay errores en los apellidos
	function validarApellidos(){
		if (esVacio(a)){
			eA.innerHTML = "Los apellidos no pueden estar vacíos";
		}
		else{
			eA.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el DNI
	function validarDni(){
		if (esVacio(d)){
			eD.innerHTML = "El DNI no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^[0-9]{8}[A-Z]$/, d)){
			eD.innerHTML = "El DNI debe estar formado por 8 números y una letra mayúscula";
		}
		else{
			eD.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el sexo
	function validarSexo(){
		if (!esSexoCorrecto()){
			eS.innerHTML = "Selecciona si eres hombre o mujer";
		}
		else{
			eS.innerHTML = "";
		}
	}

	// Comprueba si hay errores en la aceptación
	function validarAceptado(){
		if (!esAceptado()) {
			eAc.innerHTML = "Debes aceptar las condiciones";
		}
		else{
			eAc.innerHTML = "";
		}
	}

	// Validar cada campo al perder el foco
	document.getElementById("nombre").addEventListener("blur", function(){
		n = document.getElementById("nombre").value;
		validarNombre();
	});
	document.getElementById("apellidos").addEventListener("blur", function(){
		a = document.getElementById("apellidos").value;
		validarApellidos();
	});
	document.getElementById("dni").addEventListener("blur", function(){
		d = document.getElementById("dni").value;
		validarDni();
	});
	document.getElementById("sexo").addEventListener("blur", function(){
		s = document.getElementById("sexo").value;
		validarSexo();
	});
	ac.addEventListener("blur", validarAceptado);

	// Agregar funcionalidad a los botones
	bU.addEventListener("click", crearUsuario);
	bL.addEventListener("click", limpiarCampos);
})();