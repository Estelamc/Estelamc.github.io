/**
 * 	Modificar el ejercicio anterior del objeto Factura para crear una pseudoclase 
 *  llamada Factura y que permita crear objetos de ese tipo. 
 *  Se deben utilizar las funciones constructoras y la propiedad prototype.
 *
 *	Para instanciar la clase, se debe utilizar la instrucción 
 *  Factura(cliente, elementos), donde cliente también es una pseudoclase que 
 *  guarda los datos del cliente y elementos es un array simple que contiene 
 *  las pseudoclases de todos los elementos que forman la factura. 
 *
 * 	@author Estela Muñoz Cordón
 *	@version 1.0	
 */

// encapsulado array e invocar de una tirada
function general(){	
	var contenido = document.getElementById("info");

	// Creamos la clase Cliente
	function Cliente(nombre, direccion, telefono, nif){
		this.nombre = nombre;
		this.direccion = direccion;
		this.telefono = telefono;
		this.nif = nif;
	}

	// Creamos la clase Elemento
	function Elemento(descripcion, cantidad, precio){
		this.descripcion = descripcion;
		this.cantidad = cantidad;
		this.precio = precio;
	}

	// Creamos la clase Factura
	function Factura(cliente, elementos){
		this.cliente = cliente;
		this.elementos = elementos;
		this.informacion = {
			baseImponible: 0,
			iva: 16,
			total: 0,
			formaPago: "contado"
		};
	}

	// Añadimos la información de la empresa de la factura
	Factura.prototype.empresa = {
		nombre: "Nombre de la empresa",
		direccion: "Direccion de la empresa",
		telefono: "957775577",
		nif: "XXXXXXXXX"
	}

	// Añadimos métodos a la Factura
	Factura.prototype.calculaTotal = function(){
		for(var i = 0; i < this.elementos.length; i++){
			this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
		}
		this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
	}

	Factura.prototype.muestraTotal = function(){
		this.calculaTotal();
		contenido.innerHTML = "<strong>TOTAL =</strong> "+this.informacion.total+" Euros";
	}

	// Se crea una factura
	var elCliente = new Cliente("Cliente 1", "", "", "");
	var losElementos = [
		new Elemento("elemento1", "1", "5"),
		new Elemento("elemento2", "2", "12"),
		new Elemento("elemento3", "3", "42"),
	];
	var laFactura = new Factura(elCliente, losElementos);
	laFactura.muestraTotal();

}

window.addEventListener("load", function(){
	general();
});