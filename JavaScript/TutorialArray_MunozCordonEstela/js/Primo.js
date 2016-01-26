/**
	A prime number is a natural number which has exactly 
	two distinct natural number divisors: 1 and itself.

	To find all the prime numbers less than or equal to a 
	given integer n by Eratosthenes’ Sieve:

		Create a list of consecutive integers from two to n: 
		(2, 3, 4, ..., n).
		
		Set p=2, the first prime number.
		
		Strike from the list all multiples of p less than or 
		equal to n. (2p, 3p, 4p, etc.)
		
		Set p to first not striked number in the list after p.
		
		Repeat steps 3-4 until p*p > n.
		
		All the remaining numbers in the list are prime.
	
	There is also an animation available.

	Implement the Eratosthenes’ Sieve in JavaScript. 
	Compute the sum of all primes up to 100 and alert it.

	@author Estela Muñoz Cordón
	@version 1.0
 */

// borra los valores no numéricos del array y lo muestra
function primo(){
	var contenido = document.getElementById("info"); 
	
	var primos = new Array();

	annadir(primos, esPrimo);

	contenido.innerHTML = '<h1>Sumar números primos de 0 a 100</h1>'
		+'<p><strong>Números primos de 0 a 100:</strong> <ul>';

	for (var i = 0; i < primos.length; i++) {
		contenido.innerHTML += '<li>'+primos[i] +"</li>"; 
	}

	contenido.innerHTML += '</ul></p>'
	+'<p><strong>Suma:</strong> '+sumar(primos)+'</p>';
}	

// suma los números primos
function sumar(a){
	var suma = 0;
	for (var i = 0; i < a.length; i++) {
		suma += a[i];
	}
	return suma;
}

// añade los números primos de 0 a 100
function annadir(a, f){
	for (var i = 0; i < 100; i++) {
		if (esPrimo(i)) { // si es primo
			a.push(i); // se añade
		}
	}
}

// Comprueba si es primo
function esPrimo(n){
	for (var i = 2; i < n; i++) {
		// divisible entre números en que se descompone
		// el 1 no es primo (a partir del 2 hay primos)
		if (n % i == 0 || n < 2) { 
			return false // no es primo
		}
	}
	return true; // es primo
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	primo();
 });