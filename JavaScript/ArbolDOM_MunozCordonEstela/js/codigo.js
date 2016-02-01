/*
	- Fíjate en la página 10 de la presentación del tema. Es el árbol DOM de una página Web concreta. Crea el documento HTML al que representa.
	
		- Indica el número de nodos que tiene
	
	- Fíjate en la página 19 de la presentación del tema. Representa el árbol DOM del documento. Realiza las siguientes acciones:
	
		- Accede al elemento html
		- Accede al body mediante lastChild
		- Accede al head mediante la lista childNodes
		- Averigua el número de hijos de body
		- Añádele un párrafo con el texto "Hola a todos"
		- Añádele al principio del body una lista (<ol>) con los nombres de la pareja a la que perteneces. 
		- Elimina el último párrafo del documento original ("párrafo DOM 3");

	@author Estela Muñoz Cordón
*/

(function(){
	var boton_borrar = document.getElementById("b1");
	var boton_crear1 = document.getElementById("b2");
	var boton_crear2 = document.getElementById("b3");
	var boton_hijos = document.getElementById("hijos");
	var info = document.getElementById("info");


	var obj_html = document.documentElement;
	var obj_head = obj_html.firstChild;
	var obj_body = obj_html.lastChild; 

	var parrafos = document.getElementsByTagName("p");

	function numeroHijos(){
		var numeroHijos = obj_body.childNodes.length;
		info.innerHTML = "El número de hijos del elemento Body es "+numeroHijos;
	}

	boton_hijos.addEventListener("click", numeroHijos);

	function crearParr(){
		var obj_p = document.createElement("p");	
		obj_body.appendChild(obj_p);
		obj_p.appendChild(document.createTextNode("Hola a todos"));
		obj_body.insertBefore(obj_p, info);
	}	

	boton_crear1.addEventListener("click", crearParr);

	function crearLista(){
		var obj_ol = document.createElement("ol");
		var obj_li1 = document.createElement("li");
		var obj_li2 = document.createElement("li");

		obj_li1.appendChild(document.createTextNode("Estela Muñoz Cordón"));
		obj_li2.appendChild(document.createTextNode("Estela Muñoz Cordón"));

		obj_ol.appendChild(obj_li1);
		obj_ol.appendChild(obj_li2);

		obj_body.appendChild(obj_ol);		

		obj_body.insertBefore(obj_ol, parrafos[0]);
	}

	boton_crear2.addEventListener("click", crearLista);

	function borrar(){
		obj_body.removeChild(parrafos[2]);
	}

	boton_borrar.addEventListener("click", borrar);	
})();