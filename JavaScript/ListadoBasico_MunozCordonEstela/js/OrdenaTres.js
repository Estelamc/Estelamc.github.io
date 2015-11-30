/** 	
	Implementa OrdenaTres que pida tres números 
	y los muestre ordenados de menor a mayor.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function ordenaInfo(){	
	var num1 = parseInt(document.getElementById("numero1").value);	
	var num2 = parseInt(document.getElementById("numero2").value);	
	var num3 = parseInt(document.getElementById("numero3").value);	
	
	if (/^[0-9]+$/.test(num1) && /^[0-9]+$/.test(num2) 
		&& /^[0-9]+$/.test(num3)){ // válido
		// No hay mensaje de error
		document.getElementById("info1").innerHTML=" ";	
		document.getElementById("info2").innerHTML=" ";	
		document.getElementById("info3").innerHTML=" ";	
		// Muestra los números ordenados	
		document.getElementById("infoR").innerHTML="Ordenados: "
		+ordena(num1, num2, num3);		
	}
	else{ // Inválido --> Mensajes de error en cada caso
		if (!(/^[0-9]+$/.test(num1))) {	// Inválido núemro 1		
			document.getElementById("info1").innerHTML=" Formato incorrecto.";
			document.getElementById("info1").style.color="red";
		}
		if(!(/^[0-9]+$/.test(num2))) { // Inválido núemro 3
			document.getElementById("info2").innerHTML=" Formato incorrecto.";
			document.getElementById("info2").style.color="red";
		}
		if(!(/^[0-9]+$/.test(num3))) { // Inválido núemro 3
			document.getElementById("info3").innerHTML=" Formato incorrecto.";
			document.getElementById("info3").style.color="red";
		}		
	}			
}
// Ordena los números
function ordena(n1, n2, n3){
	var arr = [n1, n2, n3];	
	return arr.sort(function(a,b){return a-b});
}

// primo: i=2, i<primo, i++; si primo % i == 0 --> break --> no primo