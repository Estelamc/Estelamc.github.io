/** 	
	Implementa NumeroPrimo que pida un número 
	e indique si es primo o no.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function primo(){	
	var num = parseInt(document.getElementById("numero").value);	
	var esPrimo = true;
	
	if (/^[0-9]+$/.test(num)){ // válido
		for (var i = 2; i < num; i++) { // lo descomponemos
			if(num % i == 0){ // si es divisible por alguno de los números en que se descompone
				document.getElementById("info").style.color="red";
				document.getElementById("info").innerHTML=" No es primo.";
				esPrimo = false; // no es primo
			}			
		}
		if(esPrimo){ // Si es primo (no divisible por los números en que se descompone)
			document.getElementById("info").style.color="blue";
			document.getElementById("info").innerHTML=" Es primo.";			
		}		
	}
	else{ // inválido
		document.getElementById("info").style.color="red";
		document.getElementById("info").innerHTML=" Formato incorrecto.<br/>  Pista: debe ser un número entero positivo.";
	}			
}