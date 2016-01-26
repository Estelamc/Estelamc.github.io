/**
	Create a function find(arr,value) which finds a value 
	in given array and returns its index, or -1 if not found.
 */

// Usa los métodos pop() y push()
function buscar(){
	var contenido = document.getElementById("info"); 
	var arr = ["test", 2, 1.5, false];
	var arr2 = ["a", -1, 2, "b"];
	var index = find(arr2, 2);	

	contenido.innerHTML = '<h1>Buscar un valor</h1>'
		+'<p><strong>Array:</strong> var arr = ["test", 2, 1.5, false]</p>'
		+'<p><strong>Buscar "test":</strong> find(arr, "test"): <u>'+find(arr, "test")+'</u></p>'
		+'<p><strong>Buscar 2:</strong> find(arr, 2): <u>'+find(arr, 2)+'</u></p>'
		+'<p><strong>Buscar 1.5:</strong> find(arr, 1.5): <u>'+find(arr, 1.5)+'</u></p>'
		+'<p><strong>Buscar 0:</strong> find(arr, 0): <u>'+find(arr, 0)+'</u> (no está)</p>'
		+'<p><strong>Array 2:</strong> var arr2 = ["a", -1, 2, "b"]</p>'
		+'<p><strong>Bucle For:</strong> var index = find(arr, 2): <u>'+index+'</u><pre>'
		+'	function find(arr, value){'
				+'<br/>\t\tif (arr.indexOf) {'
					+'<br/>\t\t\treturn arr.indexOf(value);'
				+'<br/>\t\t}'

				+'<br/>\t\tfor(var i = 0; i < arr.length; i++) {'
			    	+'<br/>\t\t\tif (arr[i] == value){ // si está'
			    		+'<br/>\t\t\t\treturn i;'
			    	+'<br/>\t\t\t}'    		
			  	+'<br/>\t\t}'    
			  	+'<br/>\t\treturn -1; // si no está'
			+'<br/>\t}'
		+'</pre></p>';
}	

// Busca un valor en el array
function find(arr, value){
	if (arr.indexOf) {
		return arr.indexOf(value);
	}

	for(var i=0; i<arr.length; i++) {
    	if (arr[i] == value){ // si está 
    		return i; // Recordar qeu == no diferencia entre 0 y false
    	}    		
  	}    
  	return -1; // si no está
}

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	buscar();
 });