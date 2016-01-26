/**
 * 	Extender el objeto Array para que permita añadir nuevos elementos al final del array:
 *
 *	var array1 = [0, 1, 2];
 *	array1.anadir(3);
 *	// array1 = [0, 1, 2, 3]
 *	Incluir la opción de controlar si se permiten elementos duplicados o no:
 *
 *	var array1 = [0, 1, 2];
 *	 
 *	array1.anadir(2);
 *	// array1 = [0, 1, 2, 2]
 *	 
 * 	array1.anadir(2, false);
 *	// array1 = [0, 1, 2]Extender el objeto Array para que permita añadir nuevos elementos al final del array:
 *
 *	var array1 = [0, 1, 2];
 *	array1.anadir(3);
 *	// array1 = [0, 1, 2, 3]
 *	Incluir la opción de controlar si se permiten elementos duplicados o no:
 *
 *	var array1 = [0, 1, 2];
 *	 
 *	array1.anadir(2);
 *	// array1 = [0, 1, 2, 2]
 *	 
 *	array1.anadir(2, false);
 *	// array1 = [0, 1, 2]
 *
 * 	@author Estela Muñoz Cordón
 *	@version 1.0	
 */

function general(){
	var contenido = document.getElementById("info");

	// Funcion que añade elementos al final del array
	Array.prototype.anadir = function(elemento) {
	  	this[this.length] = elemento;
	}	

	var arr = [0, 1, 2];	

	contenido.innerHTML = '<br/>Añadiendo PERMITIENDO DUPLICADOS:<br/><br/><strong>Array Original:</strong> '+arr.toString();

	arr.anadir(2);

	contenido.innerHTML += '<br/><strong>Array tras añadir un 2:</strong> arr.anadir(2): '+arr.toString();	

	arr.anadir(2);

	contenido.innerHTML += '<br/><strong>Array tras añadir otro 2:</strong> arr.anadir(2): '+arr.toString();	

	arr.anadir(2, false);

	contenido.innerHTML += '<br/><strong>Array tras añadir 2 y false:</strong>  arr.anadir(2, false): '+arr.toString();	

	arr.anadir(3);

	contenido.innerHTML += '<br/><strong>Array tras añadir un 3:</strong> arr.anadir(3): '+arr.toString();	

	// Funcion que añade elementos al final del array y
	//  permite evitar añadir elementos duplicados
	Array.prototype.contiene = function(elemento) {
	  for(var i=0; i<this.length; i++) {
	      // Es importante utilizar el operador === para comprobar
	    // que los elementos sean exactamente iguales
	    if(this[i] === elemento) {
	      return true;
	    }
	  }
	  return false;
	}

	// Funcion que añade elementos al final del array (NO DUPLICADOS)
	Array.prototype.anadir = function(elemento){  
	    if(this.contiene(elemento)) { // si está
	      	return;	      	
	    }	  
		else { // si no está
			this[this.length] = elemento;
		}
	}

	arr.anadir(2);

	contenido.innerHTML += '<br/><br/>Y ahora SIN PERMITIR DUPLICADOS:<br/><br/><strong>Array tras añadir otro 2:</strong> arr.anadir(2): '+arr.toString();	

	arr.anadir(3);

	contenido.innerHTML += '<br/><strong>Array tras añadir otro 3:</strong> arr.anadir(3): '+arr.toString();

	arr.anadir(4);

	contenido.innerHTML += '<br/><strong>Array tras añadir un 4:</strong> arr.anadir(4): '+arr.toString()	
		+'<br/><br/><u>Nota:</u> como vemos no se añaden ni el 2 ni el 3, porque ya existen en el array.';	
}

window.addEventListener("load", function(){
	general();
});