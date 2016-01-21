/*	
	Mediante el registro de eventos recomendado por la W3C, 
	entrega una página donde muestres información referente 
	a todos los eventos del Ratón.
	
	@author Estela Muñoz Cordón
*/

function general(){
	//var info = document.getElementById('info');	

	document.addEventListener("click", function(){
		document.getElementById("click").innerHTML = "Se ha hecho click con el botón izquierdo del ratón.";
	});

	document.addEventListener("dblclick", function(){
		document.getElementById("dblclick").innerHTML = "Se ha hecho doble click con el ratón.";
	});

	document.addEventListener("mousemove", function(e){
		var info2 = document.getElementById('info2');
		var coordenadaXrelativa = e.pageX;
		var coordenadaYrelativa = e.pageY;
		var coordenadaXabsoluta = e.clientX;
		var coordenadaYabsoluta = e.clientY;

		document.getElementById("move").innerHTML = "Se ha movido el ratón. Posición:";

		info2.innerHTML = '<p><strong>Navegador</strong> ['+coordenadaXabsoluta+
			', '+coordenadaYabsoluta+']</p><p><strong>Página</strong> ['+coordenadaXrelativa+
			', '+coordenadaYrelativa+']</p>';			
	});

	document.addEventListener("mousedown", function(){
		document.getElementById("down").innerHTML = "Se ha pulsado uno de los dos botones del ratón.";
	});

	document.addEventListener("mouseout", function(){
		document.getElementById("out").innerHTML = "Se ha sacado el ratón del área del evento.";
	});

	document.addEventListener("mouseover", function(){
		document.getElementById("over").innerHTML = "Se ha introducido el ratón en el área del evento.";
	});

	document.addEventListener("mouseup", function(){
		document.getElementById("up").innerHTML = "Has soltado el botón del ratón después de pulsarlo.";
	});
}

window.addEventListener("load", general);