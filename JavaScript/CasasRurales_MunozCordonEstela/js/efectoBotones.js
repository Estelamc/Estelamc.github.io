/* EFECTO DEL BOTÓN */

$(document).ready(function() {
    $("button").mouseenter(function () {
        $(this).animate({
            transform: 'scale(1.3)'
        }, 600);

        $(this).mouseleave(function () {
            $(this).animate({
                transform: 'scale(1)'
            }, 600);
        });
    });
});
