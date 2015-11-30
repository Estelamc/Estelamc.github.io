/**
	
	What will be the result? Why?
		arr = ["a", "b"]

		arr.push( function() { alert(this) } )
	
		arr[arr.length-1]()  // ?	

	@author Estela Muñoz Cordón
	@version 1.0

 */
 
// Informa sobre lo que ocurre al hacer un push() 
// de una función con un alert(this)
function pushFuncion(){
	var contenido = document.getElementById("info"); 
	var arr = ["a", "b"];	
	//arr.push( function() { alert(this) } );
	
	contenido.innerHTML = '<h1>push() de una función</h1>'
		+'<p><strong>Array:</strong> var arr = ["a", "b"]</p>'
		+'<p><strong>Añadimos al final:</strong> arr.push( function() { alert(this) } ).' 
		+' La longitud ahora es: <u>'+arr.push( function() { alert(this) } )+'</u></p>' 
		+'<p><strong>Obtenemos el último valor:</strong> arr[arr.length-1](): <u>'+arr[arr.length-1]()+'</u></p>'
		+'<p><u>Nota:</u> También pueden añadirse funciones a un array.</p>'
		+'<p>Como el array contiene un "alert()", se muestra el contenido del'
		+' array en un mensaje emergente (es un alert() de "esto"; es decir, del objeto array).</p>';	
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	pushFuncion();
 });