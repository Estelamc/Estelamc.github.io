/*  	
	Crea la siguiente página Web donde el botón crea cinco nuevas
	ventanas ubicadas en la esquina tal y como se muestran.
	Métodos a usar:
	- miVentana = window.open(",", width=200, height=200);
	- miVentana.document.open();
	- miVentana.document.write();
		* Añade el esqueleto básico: html, head, title, body, ul...
	- miVentana.document.close();

	@author Estela Muñoz Cordón
	@version 1.0	
*/

// Abre 5 ventanas
function abrirVentanas(){
	for (var i = 1; i <= 5; i++) {
		var miVentana= window.open("","","width=200, height=200, top="+(i*10)+", left="+(i*10)+"");
		miVentana.document.open();
		miVentana.document.write(
			"<html>"+
				"<head>"+
					"<meta charset=\"UTF-8\">"+				
					
					"<title>Ventana"+i+"</title>"+
					
					"<!--Llamamos a nuestro código JavaScript externo-->"+
					"<script type=\"text/javascript\" src=\"js/funcionNuevaVentana.js\"></script>"+
					
					"<!--En el caso de que el navegador tenga desactivado"+ 
					"JavaScript, avisamos de este hecho y decimos como"+ 
					"solucionarlo, aportando un enlace-->"+
					"<noscript>JavaScript se encuentra desactivado, actívelo siguiendo los siguientes pasos:"+ 
						"<a href=\"http://enable-javascript.com/es/\">Activar/Desactivar JavaScript</a>"+
					"</noscript>"+
				"</head>"+

				"<body>"+
					"<p>Ventana "+i+"</p>"+
					"<form><input type=\"button\" id=\"cerrar\" "+
						"value=\"Cerrar\" /></form>"+
				"</body>"+
			"</html>"
		);
		miVentana.document.close();
	}	
}

// Añade el evento al cargar la página
window.addEventListener("load", function(){
	// Abre las ventanas al darle al botón "Abre múltiples ventanas"
	document.getElementById("abrir").addEventListener("click", abrirVentanas);
});