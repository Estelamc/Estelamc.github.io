/**
	An object has a className property which keeps it’s class names delimited by spaces:
		var obj = {
		  className: 'open menu'
		}
	Write a function removeClass(obj, cls) which removes a class cls if it is set:
		removeClass(obj, 'open') // obj.className='menu'
		removeClass(obj, 'blabla')  // no changes (no class to remove)
	
	@author Estela Muñoz Cordón
	@version 1.0

 */

function borrar(){
	var contenido = document.getElementById("info"); 
	// obj tiene dos clases
	var obj = { className: 'open menu' }

	removeClass(obj, 'open'); // borra la clase 'open'
	removeClass(obj, 'blabla'); // borra una clase que NO existe

	contenido.innerHTML = '<h1>Propiedad className - Borrar una clase</h1>'
		+'<p>var obj = {className: "open menu"}</p>'
		+'<p><strong>Borramos una clase:</strong> removeClass(obj, "open") </p>'
		+'<p><strong>Borramos otra clase:</strong> removeClass(obj, "blabla")</p>'
		+'<p><strong>Resultado:</strong> obj.className: <u>'+obj.className+'</u></p>'
		+'<p><u>Nota:</u> "blabla" no lo borra porque no lo tiene</p>';
}

// Usa la propiedad className
function removeClass(elem, cls){
	for (var c = elem.className.split(' '), i = c.length-1; i>=0; i--) {
		if (c[i] == cls) { // si coincide con la clase
			c.splice(i, 1); // lo borra
		}
	}
	elem.className = c.join(' '); // si no coincide  
}	

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	borrar();
 });