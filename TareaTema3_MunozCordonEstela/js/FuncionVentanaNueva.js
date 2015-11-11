// Informa si Java está habilitado o no
function infoJava(){
	var ventanaJava = window.open(); // ventana nueva
	
	ventanaJava.document.open(); // nuevo documento
	
	if (v.navigator.javaEnabled()) { // tiene java (true)
		ventanaJava.document.write("Java SÍ está disponible en esta ventana.");
	}
	else{ // no tiene java (false)
		ventanaJava.document.write("Java NO está disponible en esta ventana.");
	}

	ventanaJava.document.close();
}

// Abre otra ventana con la dirección y el tamaño indicados
function abrirOtraVentana(){
	var otraV = window.open("http://www.iesgrancapitan.org/portal/");
	otraV.resizeTo(800, 600);
}