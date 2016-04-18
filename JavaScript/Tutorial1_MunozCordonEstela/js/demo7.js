/**
 * Ajax simple. Cargar contenido desde Ajax.
 *
 * @author Estela Muñoz Cordón
 */
$(document).ready(function(){
	$("#enlaceAjax").click(function(evento){
		evento.preventDefault();
		$("#destino").load("contenido-ajax.html");
	});
});
