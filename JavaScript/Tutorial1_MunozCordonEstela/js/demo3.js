/**
 * Añadir y quitar clases CSS a elementos
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("a").mouseover(function() {
		$("#capa").addClass("clasecss");
	});

	$("a").mouseout(function() {
		$("#capa").removeClass("clasecss");
	});
});
