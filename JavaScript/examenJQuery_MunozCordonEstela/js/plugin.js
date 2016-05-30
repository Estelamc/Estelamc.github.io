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

//----- PLUGIN -----\\

// Plugin que cambia el tamaño de la fuente, el fondo y la altura
jQuery.fn.cambiar = function(opciones){
    // Valores por defecto para el cambio
    var configuracion = {
            animacionClick: {
                'background-color': 'yellow',//'#ffff0f',
                'top': '40%',
                'font-size': '5em'
            },
            animacionDblClick: {
                'background-color': 'white',//'#ffffff',
                'top': '0',
                'font-size': '1em'
            }
    };
    jQuery.extend(configuracion, opciones); 
    
    // Al hacer click - valores cambiados
    this.click(function(e){        
        $(this).css(configuracion.animacionClick);
    });
    
    // Al hacer doble click - valores iniciales
    this.dblclick(function(e){
        $(this).css(configuracion.animacionDblClick);
    });
    return this;
};


//----- EJECUCIÓN CON LOS ELEMENTOS SELECCIONADOS -----\\

// Ejecuta el código al cargar la página
$(document).ready(function(){
    // Variables
     var nombreParr = $("p").eq(2),
         apellidosParr = $("p").eq(3);
    
    // Se usa el plugin para el párrafo tercero con opciones por defecto
    nombreParr.cambiar();
    
    // Se usa el plugin para el párrafo cuarto con opciones diferentes
    apellidosParr.cambiar({
        animacionClick: {
            'background-color': "#ff0f0f",
            'top': '100%',
            'font-size': '10em'
        },
        animacionDblClick: {
            'background-color': '#ffffff',
            'top': '0',
            'font-size': '1em'
        }
    });   
});