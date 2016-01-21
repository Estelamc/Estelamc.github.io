/*
	Mediante el registro de eventos recomendado por la W3C, 
	entrega una página donde muestres información referente 
	a todos los eventos del Teclado.

	@author Estela Muñoz Cordón	
*/

function general(){
	var caracterInfo = document.getElementById('caracterCodigo');	
	var letraInfo = document.getElementById('letra');

	document.addEventListener("keyup", function(){
		document.getElementById("up").innerHTML = "Se ha soltado una tecla que ha sido pulsada.";
	});

	document.addEventListener("keydown", function(e){
		document.getElementById("down").innerHTML = "Se ha mantenido pulsada una tecla.";
		
		if (e.altKey){
			letraInfo.innerHTML = "Alt";
		}
		if (e.ctrlKey){
			letraInfo.innerHTML = "Ctrl";
		}
		if (e.shiftKey){
			letraInfo.innerHTML = "Shift";
		} 
	});

	document.addEventListener("keypress", function(e){
		document.getElementById("press").innerHTML = "Se ha pulsado una tecla.";

		var caracter = e.charCode || e.keyCode;
		var letra = String.fromCharCode(caracter);

		switch(e.keyCode || e.charCode){
			case 13:
				letra = "Enter";				
				break;
			case 8:
				letra = "Retroceso";
				break;
			case 9:
				letra = "Tabulador";
				break;
			case 32:
				letra = "Barra Espaciadora";
				break;
			case 27:
				letra = "Esc (Escape)";
				break;
		}	
		
		caracterInfo.innerHTML = caracter;
		letraInfo.innerHTML = letra;
	});
};

window.addEventListener("load", general);