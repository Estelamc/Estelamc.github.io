/**
 * 	Añadir a la clase Array un método llamado sin() que permita filtrar 
 *  los elementos del array original y obtenga un nuevo array con todos 
 *  los valores diferentes al indicado:
 *
 *	var array1 = [1, 2, 3, 4, 5];
 *	var filtrado = array1.sin(4);  // filtrado = [1, 2, 3, 5]
 *
 * 	@author Estela Muñoz Cordón
 *	@version 1.0	
 */

// encapsulado array e invocar de una tirada
var arrayPrototype = (function(){	
	
	// Devuelve un array sin los elementos que coinciden con
	//  el elemento que se pasa como parámetro
	Array.prototype.sin = function(elemento) {
	  	var filtrado = [];
	  	for(var i = 0; i < this.length; i++) {
	   		// Es importante utilizar el operador !== para comprobar
	    	// que los elementos no sean exactamente iguales
	    	if(this[i] !== elemento) {
	      		filtrado.push(this[i]);
	    	}
	  	}	
	  	return filtrado;
	}

	var arr = [1, 2, 3, 4, 5]; // array de partida
	var filtrado = arr.sin(4); // lo filtramos (sin el 4)

	return filtrado; // lo devuelve filtrado

})();

// muestra la información del cambio producido en el array antes y después del filtrado
function mostrar(){		
	document.getElementById("info").innerHTML = '<strong>Array Original:</strong> '
		+'var arr = [1, 2, 3, 4, 5]'
		+'<br/><strong>Array Filtrado (quitando el 4):</strong> arr.sin(4): '
		+'<u>'+arrayPrototype+'</u>';
}

window.addEventListener("load", function(){
	mostrar();
});