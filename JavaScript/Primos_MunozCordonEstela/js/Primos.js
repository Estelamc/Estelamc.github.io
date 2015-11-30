/**
 *  Implementa mediante javaScript el ejercicio primos mediante closure.
 *	
 *	Han de estar como elementos privados:
 *
 *		- vector de números primos
 *		- acumulador de números primos
 *		- esPrimos () que está en el foro
 *
 *	Recuerda que:
 *	
 *		- No podéis crear ninguna variable global (function(){...})();
 *		- El resultado se mostrará en una ventana nueva.
 *
 * 	@author Estela Muñoz Cordón
 *	@version 1.0	
 */

// encapsulado array e invocar de una tirada
var a = (function(){	
	var primos = new Array(); // array de números primos
	var suma = 0; // resultado de la suma de números primos

	// Comprueba si es primo
	function esPrimo(numero){
		for (var i = 2; i < numero; i++) {
			// divisible entre números en que se descompone
			// el 1 no es primo (a partir del 2 hay primos)
			if (numero % i == 0 || numero < 2) { 
				return false // no es primo
			}
		}
		return true; // es primo
	}

	// añade los números primos de 0 a 100
	function annadirPrimos(){
		for (var i = 2; i <= 100; i++) {
			if (esPrimo(i)) { // si es primo
				primos.push(i); // se añade
			}
		}
	}

	// suma los números primos
	function sumarPrimos(){
		for (var i = 0; i < primos.length; i++) {
			suma += primos[i];
		}
		return suma;
	}

	// Abre una ventana con el resultado
	function mostrarPrimos(){	
		var miVentana= window.open("","","width=800, height=400, top=10, left=10");
		miVentana.document.open();
		miVentana.document.write(
			"<html>"+
				"<head>"+
					"<meta charset=\"UTF-8\">"+				
					
					"<title>Sumando Primos</title>"+					
				"</head>"+

				"<body>"+
					'<h1>Números primos del 0 al 100:</h1><p>'+
					primos.toString()+ 
					'</p>'+					
					"<h2>Resultado de sumar los números primos de 0 a 100</h2><p>"+
					sumarPrimos()+					
				"</p></body>"+
			"</html>"
		);
		miVentana.document.close();	
	}

	annadirPrimos();
	mostrarPrimos();

})();

window.addEventListener("load", function(){
	a;
});