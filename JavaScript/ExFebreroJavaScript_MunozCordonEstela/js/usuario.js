/*
	Estela Muñoz Cordón
*/

(function(){
	
	//--------- VARIABLES ---------\\

	var i = document.getElementById("info"),
		n = document.getElementById("nombre"), 
		a = document.getElementById("apellidos"), 
		d = document.getElementById("dni"), 
		s = document.getElementById("sexo"), 
		ac = document.getElementById("aceptar"),
		eN = document.getElementById("errorN"),
		eA = document.getElementById("errorA"),
		eD = document.getElementById("errorD"),
		eS = document.getElementById("errorS"),
		eAc = document.getElementById("errorAc"),
		bU = document.getElementById("nuevo"),
		bL = document.getElementById("limpiar");

	// Variables para el DOM
	var html = document.documentElement,
		body = html.lastChild,
		ul = document.createElement("ul"),
		e = 0, // elemento de la lista (contador de elementos li) 
		lista = document.getElementsByTagName("li"); 
	// Agregamos la lista al DOM
	body.appendChild(ul);	


	//--------- FORMULARIO ---------\\

	// Crea el usuario
	function crearUsuario(){
		validarAceptado();
		validarApellidos();
		validarNombre();
		validarSexo();
		validarDni();

		if (eA.innerHTML == "" && eN.innerHTML == "" && eD.innerHTML == "" 
			&& eS.innerHTML == "" && eAc.innerHTML == ""){
			var usuarioNuevo = new Usuario(n.value.trim(), a.value.trim(), d.value.trim(), s.value.trim());
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
	}

	// Borra los valores de los campos
	function limpiarControles(){
		n.value = "";
		a.value = "";
		d.value = "";
		s.value = "";
		deseleccionarCasilla();	
	}

	// Borra los mensajes de error
	function limpiarErrores(){
		eN.innerHTML = "";
		eA.innerHTML = "";
		eD.innerHTML = "";
		eS.innerHTML = "";
		eAc.innerHTML = "";
	}

	// Borra el mensaje de información
	function limpiarDiv(){
		i.innerHTML = "";
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
		return ac.checked;
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
		return (s.value == "hombre" || s.value == "mujer");
	}

	// Comprueba si hay errores en el nombre
	function validarNombre(){ // 
		if (esVacio(n.value.trim())){
			eN.innerHTML = "El nombre no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^([A-Z]|[a-z]|[0-9]|-|_){4,}$/, n.value.trim())){
			eN.innerHTML = "El nombre requiere 4 caracteres como mínimo y pueder estar compuesto de letras(mayúsculas y minúsculas), números, guiones y subrayados";
		}
		else{
			eN.innerHTML = "";
		}
	}

	// Comprueba si hay errores en los apellidos
	function validarApellidos(){
		if (esVacio(a.value.trim())){
			eA.innerHTML = "Los apellidos no pueden estar vacíos";
		}
		else{
			eA.innerHTML = "";
		}
	}

	// Comprueba si hay errores en el DNI
	function validarDni(){
		if (esVacio(d.value.trim())){
			eD.innerHTML = "El DNI no puede estar vacío";
		}
		else if(!esCampoCorrecto(/^[0-9]{8}[A-Za-z]$/, d.value.trim())){
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
	n.addEventListener("blur", validarNombre);
	a.addEventListener("blur", validarApellidos);
	d.addEventListener("blur", validarDni);
	s.addEventListener("blur", validarSexo);
	ac.addEventListener("blur", validarAceptado);

	// Agregar funcionalidad a los botones
	bU.addEventListener("click", crearUsuario);
	bL.addEventListener("click", limpiar);


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
})();