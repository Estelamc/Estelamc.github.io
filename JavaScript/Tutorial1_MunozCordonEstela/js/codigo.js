$(document).ready(function(){
	//$("#examen").css("display", "none");
	//$("#examen").show("slow");
	$("#examen").hide("slow");
	//$("#examen").show(10000);
	/*$("#examen").show('slow', function(){
		$("#examen").css("display", "block");
	});*/

	//$("#estela").html("Estela");
	//$("#munioz").html("Muñoz");
	$("#estela").append( document.createTextNode( "Estela" ));
	$("#munioz").append( document.createTextNode( "Muñoz" ));

	var a = $("p"); // array de 4 párrafos
});
