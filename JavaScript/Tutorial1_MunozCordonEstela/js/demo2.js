/**
 * Al hacer click en el enlace nos muestra 
 * una ventana emergente con un mensaje; 
 * después, nos redirecciona a la página
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("a").click(function(){
		alert("Has pulsado el enlace...\nAhora serás enviado a DesarrolloWeb.com");
	})
});
