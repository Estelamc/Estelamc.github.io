/**
 * Callback de funciones.
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#pilaLlamadas").click(function(event){
		event.preventDefault();
		$("#miCapa").fadeOut(2000);
		$("#miCapa").css({top: 300, left: 200});
		$("#miCapa").fadeIn(2000);
	});
});
