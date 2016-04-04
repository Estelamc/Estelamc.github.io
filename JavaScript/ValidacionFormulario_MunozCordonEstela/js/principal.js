window.addEventListener("load", function(){
	//--- VARIABLES ---\\

	var nombre = document.getElementById("nombre"),	
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
		botonLimpiar = document.getElementById('limpiar');

	
	//--- FORMULARIO ---\\

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

	nombre.addEventListener("blur", function(){
		validarNombre(nombre, errorNombre);
	});
	apellidos.addEventListener("blur", function(){
		validarApellidos(apellidos, errorApellidos);
	});
	dni.addEventListener("blur", function(){
		validarDni(dni, errorDni);
	});
	alias.addEventListener("blur", function(){
		validarAlias(alias, errorAlias);
	});
	contrasenia.addEventListener("blur", function(){
		validarContrasenia(contrasenia, errorContrasenia);
	});
	fecha.addEventListener("blur", function(){
		validarFecha(fecha, errorFecha);
	});
	sexos[0].addEventListener("blur", function(){
		validarSexo(sexos, errorSexo);
	});
	sexos[1].addEventListener("blur", function(){
		validarSexo(sexos, errorSexo);
	});
	pais.addEventListener("blur", function(){
		validarPais(pais, errorPais);
	});
	correo.addEventListener("blur", function(){
		validarCorreo(correo, errorCorreo);
	});
	cuenta.addEventListener("blur", function(){
		validarCuenta(cuenta, errorCuenta);
	});
	telefono.addEventListener("blur", function(){
		validarTelefono(telefono, errorTelefono);
	});
	url.addEventListener("blur", function(){
		validarUrl(url, errorUrl);
	});
	aceptar.addEventListener("blur", function(){
		validarAceptar(aceptar, errorAceptar);
	});

	botonLimpiar.addEventListener("click", limpiar);
});