/** 	
	Implementa MultiplosDeCinco que pida 7 números 
	e indique si alguno es múltiplo de 5.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function multiplosDeCinco(){
	var campos = document.getElementsByName("numero"); // todos los elementos con el nombre "numero"
	for (var i = campos.length - 1; i >= 0; i--) { // recorre el array
		if (/^[0-9]+$/.test(campos[i].value)){ // válido
			if(parseInt(campos[i].value) % 5 == 0){ // divisible por 5
				document.getElementById("info"+i).innerHTML=" Es múltiplo de 5";
				document.getElementById("info"+i).style.color="blue";
			}		
			if(parseInt(campos[i].value) % 5 != 0){ // no divisible por 5
				document.getElementById("info"+i).innerHTML=" No es múltiplo de 5";
				document.getElementById("info"+i).style.color="red";
			}		
		}
		else{	//inválido		
			document.getElementById("info"+i).innerHTML=" Formato incorrecto";
			document.getElementById("info"+i).style.color="red";
		}	
	}
}