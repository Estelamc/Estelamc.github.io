/**
	An object has a className property which keeps it’s class names delimited by spaces.
		
	Write a function addClass(obj, cls) which adds a class cls, but only if it doesn’t yet exist.

	P.S. Your function shouldn’t add extra spaces.

 */

function propiedadClassName(){
	var contenido = document.getElementById("info"); 
	var obj = { 
		// la propiedad clasName guarda estos nombres con espacios como clase
		className: 'open menu'
	}

	addClass(obj, 'new'); // le añade a las clases anteriores 'new'
	addClass(obj, 'open'); // ya existe

	contenido.innerHTML = '<h1>Propiedad className</h1>'
		+'<p>var obj = {className: "open menu"}</p>'
		+'<p><strong>Añadimos una clase:</strong> addClass(obj, "new") </p>'
		+'<p><strong>Añadimos otra clase:</strong> addClass(obj, "open")</p>'
		+'<p><strong>Resultado:</strong> obj.className: <u>'+obj.className+'</u></p>'
		+'<p><u>Nota:</u> "open" no lo añade porque ya lo tiene</p>';
}

// Usa la propiedad className
function addClass(elem, cls){
	for (var c = elem.className.split(' '), i = c.length-1; i>=0; i--) {
		if (c[i] == cls) { // si coincide con la clase
			return; // se sale
		}
	}
	elem.className += ' '+cls; // si coincide lo añade 
}	

// Al cargar la página, lanza los eventos
 window.addEventListener("load", function(){
 	propiedadClassName();
 });