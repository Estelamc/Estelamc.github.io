/**
 * Según el botón que cliqueamos, 
 * cambia el mensaje mostrado en el div 
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#botonA").click(function(){
		$("#capa").html("Has hecho click en el botón <b>A</b>")
	});

	$("#botonB").click(function(){
		$("#capa").html("Has hecho click en el botón <b>B</b>")
	});
});
