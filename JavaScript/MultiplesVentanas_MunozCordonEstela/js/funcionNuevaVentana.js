// Cierra la ventana
function cerrar(){
	window.close();
}

// Añade el evento al cargar la página
window.addEventListener("load", function(){
	// Cierra la ventana al darle al botón "Cerrar"
	document.getElementById("cerrar").addEventListener("click", cerrar);
});