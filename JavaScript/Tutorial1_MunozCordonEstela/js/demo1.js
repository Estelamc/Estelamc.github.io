/**
 * Si ponemos el ratón sobre el div de color naranja, 
 * muestra un mensaje en el div de abajo
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#capa").mouseenter(function(){
		$("#mensaje").css("display", "block");
	});
	
	$("#capa").mouseleave(function(){
		$("#mensaje").css("display", "none");
	});
});
