/**
	Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una ventana ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
	Métodos a utilizar:
		- window.open();
		- document.write();
			* Añade el esqueleto básico: html, head, body, ul...

	@author Estela Muñoz Cordón
	@version 1.0	
 */

// Abre una ventana nueva
 function abrir(){
 	var miVentana = window.open("", "", "width=300, height=200, top=0, left=0");
 	miVentana.document.open();
 	miVentana.document.write(
 		"<!DOCTYPE HTML>"+
			"<html>"+
				"<head>"+
					"<meta charset=\"UTF-8\">"+				
		
					"<title>Ventana de Prueba</title>"+
				"</head>"+

				"<body>"+
					"<p>Se han utilizado las propiedades:"+
						"<ul>"+
							"<li>height=200</li>"+
							"<li>width=300</li>"+
						"</ul>"+
					"</p>"+
				"</body>"+
			"</html>"
 	);
 	miVentana.document.close();
 }

// Lanza las funciones al cargar la ventana
 window.addEventListener("load", function(){
 	document.getElementById("abrir").addEventListener("click", abrir);
 });