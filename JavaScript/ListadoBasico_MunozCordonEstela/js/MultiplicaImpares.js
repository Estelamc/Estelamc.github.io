/** 	
	Implementa DeNumericoATexto que solicite un número del 0 al 99 
	y lo muestre escrito. Por ejemplo, para 12 mostrar: doce, 
	para 44 mostrar: cuarenta y cuatro. 
	Que sea lo más eficiente posible.
	
	Implementa MultiplicaImpares que multiplique los 20 
	primeros números impares y muestre el resultado en pantalla.

	@author Estela Muñoz Cordón
	@version 1.0	
*/

function imparesInfo(){			
	document.getElementById("info").innerHTML="Resultado de multiplicar los 20 primeros números impares: "+multImpares()+"."
}

// multiplica los 20 primeros números impares
function multImpares(){
	var r = 1;
	cont=0;

	while(cont<20){
		for (var i = 1; i <20; i=i+2) {		
			r *= i;	
			cont++;	
		}	
	}	
	return r;
}