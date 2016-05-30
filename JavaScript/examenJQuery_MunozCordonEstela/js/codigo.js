/**
 * - Sobre el código anterior, añádele las etiquetas necesarias para tener accesible jQuery, que supuestamente tienes en el mismo directorio que index.html
 *
 * - Añádele un script denominado “código.js” que haga lo siguiente
 *      -- Al párrafo primero (examen) aplícale un efecto al cargarse la página. 
 *      -- Al párrafo de texto “Nombre” añádele un atributo denominado “id” con tu nombre como valor.
 *      -- Al párrafo de texto “Apellidos” añádele un atributo denominado “id” con tu apellido como valor
 *      -- Añádele tu nombre al elemento.  En mi caso la página se mostraría: ”Nombre:  Lourdes”
 *      -- Añádele tu apellido al elemento.  En mi caso la página se mostraría: ”Apellido:  Magarín”
 *      
 * - Añádele un fichero “plugin.js” donde definas tu propio plugin con gestión de opciones.  Se llamará “cambiar” y funcionará de la siguiente forma:
 *      -- Aplicará un fondo 
 *      -- Ante el evento click, aumentará su altura y el tamaño de la fuente
 *      -- Ante el evento doble click, volverá a su altura y tamaño original
 *      -- Las opciones por defecto serán: el color de fondo, la altura y el tamaño de la fuente, que serán respectivamente amarillo, 40% y 5 veces su tamaño.
 * - Invoca al plugin de dos formas: 
 *      -- Al tercer párrafo, con las opciones por defecto
 *      -- Al cuarto párrafo, con los siguientes valores: rojo, 100% y 10 veces su tamaño
 *
 * @author Estela Muñoz Cordón
 */

$(document).ready(function(){
    // Variables
    var exParr = $("#examen"),
        nombreParr = $("p").eq(2),
        apellidoParr = nombreParr.parent().next().find("p");
    
    // Muestra/ Oculta un elemento
    function efecto(elemento){
        elemento.hide(360);
        elemento.show(360);       
    }
    
    // Realiza el efecto al primer párrafo
    efecto(exParr);
    
    // Añade el id="estela" al párrafo de Nombre (el tercero)
    nombreParr.attr("id", "estela");
    
    // Añade el id="munoz" al párrafo de Apellidos (el cuarto y siguiente)
    apellidoParr.attr("id", "munoz");
   
    // Añade tu nombre al párrafo de Nombre
    //nombreParr.html(nombreParr.html()+" Estela"); --> Otra forma
    $("#estela").html(nombreParr.html()+" Estela");
    
    // Añade tu nombre al párrafo de Apellido
    //apellidoParr.html(apellidoParr.html()+" Muñoz"); --> Otra forma
    $("#munoz").html(apellidoParr.html()+" Muñoz");
});