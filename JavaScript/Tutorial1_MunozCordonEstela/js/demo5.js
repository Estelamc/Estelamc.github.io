/**
 * Efectos rápidos. Mostrar/ Ocultar
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#ocultar").click(function(event){
		event.preventDefault();
		$("#capaEfectos").hide("slow");
	});

	$("#mostrar").click(function(event){
		event.preventDefault();
		$("#capaEfectos").show(3000);
	});
});
