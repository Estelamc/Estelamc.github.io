/** 	
	Implementa Decena que solicite un número
		entre 0 y 10 (9,76876) e indique:
			a. Cuántas cifras tiene (7 cifras)
			b. Lo muestre del revés

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function numeroInfo(){	
	var num = document.getElementById("numero").value;	
	
	if (/^[0-9]+((\\. | \\,)[0-9]+)?/.test(num)){ // válido	
		if(parseFloat(num) >= 0 && parseFloat(num) <= 10){ // entre 0 y 10
			document.getElementById("infoR").innerHTML="Cifras: "
				+cifras(num)+"<br/>Al revés: "+alReves(num);
			document.getElementById("info").innerHTML="";
		}
		else{ // No entre 0 y 10
			document.getElementById("info").innerHTML=" Deme un número entre 0 y 10.";
			document.getElementById("info").style.color="red";
		}					
	}
	else{ // inválido			
		document.getElementById("info").innerHTML=" Formato incorrecto.";
		document.getElementById("info").style.color="red";
	}			
}

// Devuelve la cantidad de cifras
function cifras(n){
	n2 = n.split("");
	for (var i = n2.length - 1; i >= 0; i--) {
		if(n2[i]=="." || n2[i]==","){
			return n.length-1;
		} 
	}
	return n.length;	
}

// Devuelve el número al revés
function alReves(n){
	n = n.split("");
	n.reverse();
	return n.join("");
}