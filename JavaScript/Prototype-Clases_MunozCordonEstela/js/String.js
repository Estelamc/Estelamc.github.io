/**
 * 	Extender la clase String para que permita truncar una cadena de texto 
 *  a un tamaño indicado como parámetro:
 *
 *	var cadena = "hola mundo";
 *	cadena2 = cadena.truncar(6); // cadena2 = "hola m"
 *	Modificar la función anterior para que permita definir el texto que 
 *  indica que la cadena se ha truncado:
 *
 *	var cadena = "hola mundo";
 *	cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."
 *
 * 	@author Estela Muñoz Cordón
 *	@version 1.0	
 */

// encapsulado array e invocar de una tirada
function general(){	
	var contenido = document.getElementById("info");

	// Funcion que trunca la longitud de una cadena
	String.prototype.truncar = function(longitud) {
		longitud = longitud || 10;
		if(this.length > longitud) {
			return this.substring(0, longitud);
		}
		else {
			return this;
		}
	}

	// sin indicador de continuidad:
	 
	var cadena = "hola mundo";
	
	contenido.innerHTML = '<strong>Cadena 1 original:</strong> '+cadena
		+'<br/><br/><strong>Cadena de longitud 6:</strong> '+cadena.truncar(6);
	 
	
	// con indicador de continuidad

	// Funcion que trunca la longitud de una cadena y añade
	//  un indicador de cadena truncada
	String.prototype.truncar = function(longitud, indicador) {
	  longitud = longitud || 10; // 10 es la longitud real (o es ésta o la que digan)
	  indicador = indicador || '...'; // ... para que se vea que hay más o lo que e diga
	 
	  if(this.length > longitud) {
	    return this.substring(0, longitud-indicador.length) + indicador;
	  }
	  else {
	    return this;
	  }
	}
	 
	var cadena2 = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho"
		+" tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco"
		+" y galgo corredor.";

	contenido.innerHTML += '<br/><br/><br/><strong>Cadena 2 original:</strong> '+cadena2
		+'<br/><br/><strong>Cadena de longitud 50 e indicador "... (sigue)" (para indicar que falta texto):'
		+'</strong> '+cadena2.truncar(50, '... (sigue)')
		+'<br/><br/><strong>Cadena de longitud 50 sin indicador (se pone el que está por defecto: "..."):'
		+'</strong> '+cadena2.truncar(50);

}

window.addEventListener("load", function(){
	general();
});