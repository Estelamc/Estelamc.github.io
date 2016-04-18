/**
 * Mostrar/ Ocultar con checkbox
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#mayorEdad").click(function(evento) {
		if ($("#mayorEdad").attr("checked")) {
			$("#formularioMayores").css("display", "block");
		}else{
			$("#formularioMayores").css("display", "none");
		}		
	});
});
