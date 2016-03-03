$(document).ready(function() {
    // Cambia el fondo de los titulares de las casas rurales
    $( "article>header").animate({
        backgroundColor: "#819142"
    }, 3000);

    // Efecto iconos
    $("#iconos>span").mouseenter(function () {
        $(this).animate({
            transform: 'rotate(-360deg)'
        }, 600);
    });
});
