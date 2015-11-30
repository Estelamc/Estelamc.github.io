/** 	
	Implementa NumerosPrimosEnSecuencia que pida un número e indique cuántos números
	primos existen entre el 1 y dicho número.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function primo(){	
	var num = parseInt(document.getElementById("numero").value);	
	var esPrimo = true;
	
	if (/^[0-9]+$/.test(num)){ // válido
		document.getElementById("info").style.color="blue";
		document.getElementById("info").innerHTML= " Números primos encontrados: ";	

		for (var i = 1; i < num; i++) { // entre el 1 y el número indicado (i)	
			for (var j = 2; j < i; j++) { // lo descomponemos (j) 
				if(i % j == 0){ // si i es divisible por alguno de los números en que se descompone (j)
					document.getElementById("info").innerHTML+=" ";
					esPrimo = false; // no es primo
				}			
			}
			if(esPrimo){ // Si es primo (no divisible por los números en que se descompone)
				document.getElementById("info").innerHTML+= i+" ";			
			}		
		}		
	}
	else{ // inválido
		document.getElementById("info").style.color="red";
		document.getElementById("info").innerHTML=" Formato incorrecto.<br/>  Pista: debe ser un número positivo.";
	}			
}